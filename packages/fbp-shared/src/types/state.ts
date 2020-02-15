import { IFbpNode } from './node';
import { IFbpConnection } from './connection';

export interface IFbpState {
    nodes: IFbpNode[];
    connections: IFbpConnection[];
}