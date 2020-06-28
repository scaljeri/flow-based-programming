import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy, Input, OnChanges, HostListener, ElementRef, AfterViewInit, SimpleChanges, SimpleChange
} from '@angular/core';
import { IFbpState, createUID } from '@scaljeri/fbp-core';
// import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { New } from 'src/app/store/actions/state';
import { Store } from '@ngxs/store';
import { FBP_NODE_EVENTS } from 'src/app/events';
import { NodeManagerService, INodeServiceItem } from 'src/app/services/node-manager.service';
import { fbpDispatchEvent } from 'src/app/utils/event';
import * as dragUtils from '../../utils/drag-drop';
import { NodeCoordinates } from 'src/app/store/actions/node';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, OnChanges, AfterViewInit {
  private dragNode: dragUtils.IDrag;

  @Input() state: IFbpState;
  @Input() setState(state: IFbpState): void {
    this.state = state;
    this.newState(state);
    // this.nodes = this.element.nativeElement.shadowRoot.querySelector('slot').assignedElements();
  }

  // private nodes: HTMLElement[];
  // private draggableNode: HTMLElement;

  // @Select(FfpState) animals$: Observable<IFbpState>;

  @Dispatch() newState = (state: IFbpState) => new New(state);

  constructor(
    private element: ElementRef,
    private nodeService: NodeManagerService,
    private store: Store) {
    const setState = this.setState.bind(this);
    (element.nativeElement as any).setState = (state: IFbpState) => {
      setState(state);
    };
  }

  ngOnInit(): void {
    // TODO: Test this with an angular application
    // At this time al nodes are present waiting for their configuration to be
    console.log(createUID());
    setTimeout(() => {
      setTimeout(() => {
        fbpDispatchEvent('fbp-ready', this.element, {
          detail: {
            init: (state: IFbpState) => {
              this.setState(state);
            }
          }
        });
      });

      // console.log(createUID());

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
      // console.log('YES YESY ', changes.state.previousValue, changes.state.currentValue, this.state);
      // this.store.reset(this.state);
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
    this.dragNode = dragUtils.startDragNode(event, this.element.nativeElement);
    // this.draggableNode = (event.target as HTMLElement).closest('fbp-node');
    // determine pointer offset with respect to the node
    // this.draggable = this.nodeService.lookupByHTMLElement(target.closest<HTMLElement>('fbp-node'));
  }

  @HostListener('pointermove', ['$event'])
  onDragMove(event: PointerEvent): void {
    if (this.dragNode) {
      this.dragNode.move(event);
    }
  }

  @HostListener('pointerup', ['$event'])
  @HostListener('pointercancel', ['$event'])
  // @HostListener('pointerout', ['$event'])
  @HostListener('pointerleave', ['$event'])
  onDragEnd(event: PointerEvent): void {
    if (this.dragNode) {
      const result = this.dragNode.end(event);

      if (!result.isClick) {
        // persist change in coordinates
        this.store.dispatch(new NodeCoordinates({
          id: result.target.getAttribute('id'),
          position: { left: result.left, top: result.top }
        }));
      }

      this.dragNode = null;
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
