import { IFbpNode } from './nodes';

export interface IFbpNodeWorker {
	update(data: any): void;
}

export interface IFbpNodeWorkerOptions {
	outputHandler(data: any): void;
}
