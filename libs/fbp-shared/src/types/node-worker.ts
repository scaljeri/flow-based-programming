import { IFbpNode } from './node';

export interface IFbpNodeWorker {
	update(data: any): void;
}

export interface IFbpNodeWorkerOptions {
	outputHandler(data: any): void;
}
