import { IFbpState } from '@scaljeri/fbp-shared';

export namespace FbpStateActions {
	export class New {
		static readonly type = '[State] New';
		constructor(public payload: IFbpState) { }
	}
}
