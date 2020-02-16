import { State, Action, StateContext } from '@ngxs/store';

import { IFbpState } from '@scaljeri/fbp-shared';
import { Injectable } from '@angular/core';
import { FbpStateActions } from './actions/state';

@State<IFbpState>({
	name: 'fbp',
	defaults: {
		name: 'FBP',
		nodes: [],
		connections: []
	}
})
@Injectable()
export class FfpState {
	@Action(FbpStateActions.New)
	newState(ctx: StateContext<IFbpState>, { payload }: { payload: IFbpState }) {
		console.log('UPDATE state ', payload);
		ctx.setState(payload);
	}
	// @Action(Decrement)
	//    decrement(ctx: StateContext<number>) {
	//    ctx.setState(ctx.getState() - 1);
	//  }
}
