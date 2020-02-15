import { State, Action, StateContext } from '@ngxs/store';

import { IFbpState } from '@scaljeri/fbp-shared';
import { Injectable } from '@angular/core';

// export class Increment {
//    static readonly type = '[Counter] Increment';
// }
// export class Decrement {
//    static readonly type = '[Counter] Decrement';
// }
@State<IFbpState>({
   name:'fbp',
   defaults: { nodes: [], connections: [] }
})
@Injectable()
export class FfpState {
   // @Action(Increment)
   //    increment(ctx: StateContext<number>) {
   //    ctx.setState(ctx.getState() + 1);
   // }
   // @Action(Decrement)
   //    decrement(ctx: StateContext<number>) {
   //    ctx.setState(ctx.getState() - 1);
   //  }
}
