import { IFbpSocket } from './socket';

export type NodeId = string;

export interface IFbpNodeView {
    x: number;
    y: number;
    isFullscreen?: boolean;
    parentId?: string;
}

export interface IFbpDocTitle {
    size: 'xl' | 'l' | 's';
    content: string;
}

export interface IFbpDocContent {
    title: IFbpDocTitle;
    content: string;
}

export interface IFbpDocNode {
    position: number;
    before: IFbpDocContent[],
    after: IFbpDocContent[]
}

export interface IFbpPosition {
    top: number;
    left: number;
}

export interface IFbpNodes {
	[id: string]: IFbpNode;
}

export interface IFbpNode<T = any> {
    id: NodeId;
    type: string;
    position: IFbpPosition;
    isFullscreen?: boolean;
    mode?: 'normal' | 'demo'; // normal is default and `demo` is with transparent sockets
    state?: T;
    sockets?: IFbpSocket[];
    doc?: IFbpDocNode;

}
