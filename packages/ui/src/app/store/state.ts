import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';

import { IFbpState, IFbpNode } from '@scaljeri/fbp-core';
import { Injectable } from '@angular/core';
import { New } from './actions/state';
import { NodeCoordinates, NodeCoordinate } from './actions/node';

@State<IFbpState>({
  name: 'fbp',
  defaults: {
    name: 'FBP',
    nodes: {},
    connections: []
  }
})
@Injectable()
export class FbpState {
  static node(id: string) {
    return createSelector([FbpState], (state: IFbpState) => {
      return state.nodes[id];
    });
  }

  // @Selector([FbpState])
  static nodes(state: IFbpState) {
    console.log('State#nodes');
    return state.nodes;
  }

  // @Selector([FbpState.nodes])
  static nodexx(nodeId: string) {
    return createSelector([FbpState], (state: IFbpState) => {
      // const outNode = state.nodes.filter(node => node.id === nodeId)[0];
      // console.log('State#getNode#createSelector', nodeId, outNode, state);
      console.log('OKOKOKOKOKO', state.nodes[nodeId]);
      return state.nodes[nodeId]; // outNode;
    });
  }

  @Action(New)
  newState(ctx: StateContext<IFbpState>, { payload }: { payload: IFbpState }) {
    console.log('State#newState', payload);
    ctx.setState(payload);
  }

  @Action(NodeCoordinates)
  updateNodeCoordinates(ctx: StateContext<IFbpState>, { payload }: { payload: NodeCoordinate }) {
    const state = ctx.getState();
    const nodes = state.nodes;
    const node = { ...nodes[payload.id], ...{position: payload.position}};
    // const node = state.nodes[payload.id]; // .find(n => n.id === payload.id);
    ctx.patchState({ nodes: { ...nodes, [payload.id]: node}});
    // const index = state.nodes.indexOf(node);

    // const nodes = [...state.nodes];
    // nodes[index] = { ...node, ...{ position: payload.position } };

    console.log('UPDTAE!!!!!', payload, state);
    // const s = { ...state };
    // s[payload.id] = { ...s[payload.id], ...{ position: payload.position}};
    // ctx.patchState({ nodes });
    // state.nodes[index] = { ...node, ...{ position: payload.position } };
    // ctx.patchState({ nodes });
    // ctx.setState({ ...state, ...{[payload.id]: node}});
    // ctx.setState(s);
  }

  // @Action(Decrement)
  //    decrement(ctx: StateContext<number>) {
  //    ctx.setState(ctx.getState() - 1);
  //  }
}
