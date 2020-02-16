import { IFbpNode } from './node';
import { IFbpConnection } from './connection';
export interface IFbpState {
		name: string;
    nodes: IFbpNode[];
    connections: IFbpConnection[];
}
