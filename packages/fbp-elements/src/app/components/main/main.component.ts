import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { IFbpState } from '@scaljeri/fbp-shared';
// import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { FbpStateActions } from 'src/app/store/actions/state';
import { Store } from '@ngxs/store';

@Component({
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	encapsulation: ViewEncapsulation.ShadowDom,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, OnChanges {
	@Input() state: IFbpState;

	// @Select(FfpState) animals$: Observable<IFbpState>;

	@Dispatch() newState = (state: IFbpState) => new FbpStateActions.New(state);

	constructor(private store: Store) { }

	ngOnInit(): void {
	}

	ngOnChanges(): void {
		// state stuff
		setTimeout(() => {
			console.log('main: ', this.state);
			this.newState(this.state);
		})
		// this.store.dispatch(new FbpStateActions.New(this.state));
		// this.store.reset(this.state);
	}

	get nodeTitle(): string {
		return 'Node title';
	}
}
