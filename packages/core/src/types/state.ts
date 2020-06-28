import { IFbpNodes } from './nodes';
import { IFbpConnection } from './connection';

export interface IFbpState {
	name: string;
	nodes: IFbpNodes;
	connections: IFbpConnection[];
}
