import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';

import { IFbpState } from '@scaljeri/fbp-core';
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
export class FbpState {
	// @Selector([FbpState])
	static nodes(state: IFbpState) {
		console.log('State#nodes');
		return state.nodes;
	}

	// @Selector([FbpState.nodes])
	static getNode(nodeId: string) {
		console.log('State#getNode', nodeId);
		return createSelector([FbpState], (state: IFbpState) => {
			const outNode = state.nodes.filter(node => node.id === nodeId)[0];
			console.log('State#getNode#createSelector', nodeId, outNode, state);

			return outNode;
		});
	}

	@Action(FbpStateActions.New)
	newState(ctx: StateContext<IFbpState>, { payload }: { payload: IFbpState }) {
		console.log('State#newState', payload);
		ctx.setState(payload);
	}
	// @Action(Decrement)
	//    decrement(ctx: StateContext<number>) {
	//    ctx.setState(ctx.getState() - 1);
	//  }
}
