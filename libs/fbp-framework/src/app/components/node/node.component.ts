import { Component, ElementRef, OnInit, AfterViewInit, OnChanges, Input, ViewEncapsulation, ChangeDetectionStrategy, SimpleChange, SimpleChanges, ChangeDetectorRef, ContentChild, HostBinding } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { IFbpNode, IFbpState } from '@scaljeri/fbp-shared';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { FbpState } from 'src/app/store/state';

@Component({
	templateUrl: './node.component.html',
	styleUrls: ['./node.component.scss'],
	encapsulation: ViewEncapsulation.ShadowDom,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbpNodeComponent implements OnInit, AfterViewInit, OnChanges {
	@Input() id: string;

	public node$: Observable<IFbpNode>;
	public node: IFbpNode;

	@HostBinding('style.top')
	get top(): string {
		return `${this.node ? this.node.position.top : '-100'}%`;
	}

	@HostBinding('style.left')
	get legt(): string {
		return `${this.node ? this.node.position.left : '-100'}%`;
	}

	// state$;
	// @Select(FbpState) state$: Observable<FbpState>;

	constructor(private element: ElementRef, private store: Store, private cdr: ChangeDetectorRef) {
		// this.node$ = this.store
		// 	.select(FfpState).pipe(
		// 		tap(d => console.log('tap', d)),
		// 		filter((node: IFbpNode) => node && node.id === this.idx));
		// this.state$ = this.store.select(FbpState);
	}

	ngOnInit(): void {
		// this.state$.subscribe(state => {
		// 	console.log('NodeComponent@state yesyes', state);
		// }ci)

		const proto = Object.assign({ bubbles: true, cancelable: true, view: window, detail: { id: 'xxx'} }, {});

		const evt = new CustomEvent('fbp.nodeAdd', proto);

		this.element.nativeElement.addEventListener('fbp.nodeAdd', (data) => {
			console.log('test test ', data);
		});

		this.element.nativeElement.dispatchEvent(evt);
		setTimeout(() => {
			const x = this.element.nativeElement.querySelector('[name=small]');
			const slot = this.element.nativeElement.shadowRoot.querySelector('slot[name=small]').assignedElements()[0];

			console.log('XXXXXXXXXXXX=', slot);
		}, 1000);
	}

	ngOnChanges(changes: SimpleChanges): void {
		const id = changes.id;

		if (id.currentValue) {
			this.node$ = this.store.select(FbpState.getNode(this.id));
			this.cdr.detectChanges();
			this.node$.subscribe(node => {
				if (node) {
					console.log('xxxxNodeComponent@node$', node);
					this.node = node;
					this.cdr.detectChanges();
				}
			});

		}



	}

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


}
