import { FbpSocket } from './socket';
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
    before: IFbpDocContent[];
    after: IFbpDocContent[];
}
export interface IFbpPosition {
    x: number;
    y: number;
}
export interface IFbpNode<T = any> {
    id: string;
    type: string;
    position: IFbpPosition;
    isFullscreen?: boolean;
    mode?: 'normal' | 'demo';
    state?: T;
    sockets?: FbpSocket[];
    doc?: IFbpDocNode;
}
