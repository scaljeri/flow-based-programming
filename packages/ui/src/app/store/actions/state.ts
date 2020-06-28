import { IFbpState } from '@scaljeri/fbp-core';

export class New {
  static readonly type = '[State] New';
  constructor(public payload: IFbpState) { }
}
