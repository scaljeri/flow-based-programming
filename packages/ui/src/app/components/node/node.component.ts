import { Component, ElementRef, OnInit, AfterViewInit, OnChanges, Input, ViewEncapsulation, ChangeDetectionStrategy, SimpleChange, SimpleChanges, ChangeDetectorRef, ContentChild, HostBinding, OnDestroy, Attribute } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { IFbpNode, IFbpState } from '@scaljeri/fbp-core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { FbpState } from 'src/app/store/state';
import { fbpDispatchEvent } from 'src/app/utils/event';
import { FBP_NODE_EVENTS } from 'src/app/events';
import { MainComponent } from '../main/main.component';
import { NodeManagerService } from 'src/app/services/node-manager.service';

@Component({
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeComponent implements OnInit, AfterViewInit, OnDestroy {
  public node$: Observable<IFbpNode>;
  public node: IFbpNode;
  public id: string;

  @HostBinding('style.top')
  get top(): string {
    return `${this.node && this.node.position ? this.node.position.top : '-100'}%`;
  }

  @HostBinding('style.left')
  get left(): string {
    return `${this.node && this.node.position ? this.node.position.left : '-100'}%`;
  }

  // state$;
  // @Select(FbpState) state$: Observable<FbpState>;

  constructor(
    private element: ElementRef,
    private store: Store,
    private cdr: ChangeDetectorRef,
    private nodeService: NodeManagerService) {
    // this.node$ = this.store
    // 	.select(FfpState).pipe(
    // 		tap(d => console.log('tap', d)),
    // 		filter((node: IFbpNode) => node && node.id === this.idx));
    // this.state$ = this.store.select(FbpState);
  }

  ngOnInit(): void {
    this.id = this.element.nativeElement.getAttribute('id');

    this.store.select(FbpState.node(this.id)).subscribe((node: IFbpNode) => {
      console.log('update ' + this.id);
      this.node = node;
    });

    // this.store.select(FbpState.getNode(this.id)).subscribe((node: IFbpNode) => {
    // this.store.select(FbpState.pandas(this.id)).subscribe((node: IFbpNode) => {
    //   console.log('-----NODE UPDATE', this.id, node);
    //   this.node = node;
    //   // this.cdr.markForCheck();
    // });

    // this.state$.subscribe(state => {
    // 	console.log('NodeComponent@state yesyes', state);
    // }ci)


    // setTimeout(() => {
    // 	const x = this.element.nativeElement.querySelector('[name=small]');
    // 	const slot = this.element.nativeElement.shadowRoot.querySelector('slot[name=small]').assignedElements()[0];

    // 	console.log('XXXXXXXXXXXX=', slot);
    // }, 1000);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   const id = changes.id;

  //   if (id.currentValue) {
  //     // fbpDispatchEvent(FBP_NODE_EVENTS.ADD, this.element, { detail: { id: this.id } });
  //     this.nodeService.addNode(this.id, this.element.nativeElement, this);

  //     this.node$ = this.store.select(FbpState.getNode(this.id));
  //     this.cdr.detectChanges();
  //     this.node$.subscribe(node => {
  //       if (node) {
  //         console.log('xxxxNodeComponent@node$', node);
  //         this.node = node;
  //         this.cdr.detectChanges();
  //       }
  //     });

  //   }
  // }

  ngAfterViewInit(): void {
    const child = this.element.nativeElement.children[0];
    // console.log('Node::::', this.element.nativeElement.children, this.element.nativeElement.children.item(0), child);
    // child.setSocket('yes from parent');
    // setTimeout(() => {
    // 	console.log('delayNODE id= ' + this.idx);
    // });
    // 	console.log('NODE id= ' + this.idx);
    // 	// this.node$ = this.store.select(FbpState); //.getNode(this.idx));
    // 	this.node$ = this.store.select(FbpState.getNode(this.idx));
    // 	// });
    // 	this.node$.subscribe(node => {
    // 		console.log('*********', node);
    // 		this.node = node;
    // 	});
  }

  ngOnDestroy(): void {
    // const event = fbpDispatchEvent(FBP_NODE_EVENTS.REMOVE, null, { detail: this.id });
    // this.element.nativeElement.parentNode.dispatchEvent(event);
    this.nodeService.removeNode(this.id);
  }
}
