import {
  Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, OnChanges, HostListener, ElementRef, AfterViewInit, SimpleChanges, SimpleChange, SimpleChange, SimpleChange
} from '@angular/core';
import { IFbpState } from '@scaljeri/fbp-core';
// import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { FbpStateActions } from 'src/app/store/actions/state';
import { Store } from '@ngxs/store';
import { FBP_NODE_EVENTS } from 'src/app/events';
import { NodeManagerService, INodeServiceItem } from 'src/app/services/node-manager.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() state: IFbpState;

  @Input() setState(state: IFbpState): void {
    this.state = state;
  }

  private draggable: INodeServiceItem;

  // @Select(FfpState) animals$: Observable<IFbpState>;

  @Dispatch() newState = (state: IFbpState) => new FbpStateActions.New(state);

  constructor(
    private element: ElementRef,
    private nodeService: NodeManagerService,
    private store: Store) {
    (element.nativeElement as any).setState = (state: IFbpState) => {
      this.state = state;
    };
  }

  ngOnInit(): void {
    console.log('framework: main!!');
    setTimeout(() => {
      // At this time al nodes are present waiting for their configuration to be
      setTimeout(() => {
        // const nodes = this.element.nativeElement.shadowRoot.querySelector('slot').assignedElements();
        // console.log('YES ', nodes);
        const event = new CustomEvent('fbp-ready', { detail: { init: (state) => {
          const change = new SimpleChange(this.state, state, !this.state);
          this.setState(state);
          this.ngOnChanges({ state: change});
        }}});

        this.element.nativeElement.dispatchEvent(event);
        // this.initialize();
      });
      // console.log('main: ', this.state);
      this.newState(this.state);

      // setTimeout(() => {
      // 	const node = this.state.nodes[0];
      // 	console.log('UPDATE NODE ID=' + node.id);
      // 	const newNode = { ...node, position: { x: 1, y: 2 } };

      // 	this.newState(Object.assign({}, this.state, { nodes: [newNode, this.state.nodes[1]] }));
      // }, 5000);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Update if state changes
    if (changes.state) {
      console.log('YES YESY ', changes.state.previousValue, changes.state.currentValue, this.state);
    }

    // this.store.dispatch(new FbpStateActions.New(this.state));
    // this.store.reset(this.state);
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    // console.log('number of node sis ' + this.nodes.length);
    // }, 2000);
  }

  get nodeTitle(): string {
    return 'Node title';
  }

  @HostListener('pointerdown', ['$event'])
  onDragStart(event: PointerEvent): void {

    const target = event.target as HTMLElement;
    this.draggable = this.nodeService.lookupByHTMLElement(target.closest<HTMLElement>('fbp-node'));

  }

  @HostListener('pointermove', ['$event'])
  onDragMove(event: PointerEvent): void {
    if (this.draggable) {
      console.log('Dragging', event);
    }
  }

  @HostListener('pointerup', ['$event'])
  @HostListener('pointercancel', ['$event'])
  @HostListener('pointerout', ['$event'])
  @HostListener('pointerleave', ['$event'])
  onDragEnd(event: PointerEvent): void {
    if (this.draggable) {
      console.log('End drag', event);
      this.draggable = null;
    }
  }

  @HostListener('fbp-fullscreen', ['$event'])
  fullscreen(nodeId): void {
    // do magic
  }

  @HostListener('window:resize')
  onResize(): void {
    console.log('window.resize');
  }

  @HostListener(FBP_NODE_EVENTS.ADD, ['$event'])
  onNodeAdd(event): void {
    // TODO: Is this one needed?
    console.log('--Node added with id=' + event.detail);
  }

  @HostListener(FBP_NODE_EVENTS.REMOVE, ['$event'])
  onNodeRemove(event): void {
    // TODO: Cleanup connections
    console.log('Node removed with id=' + event.detail);
  }
}
