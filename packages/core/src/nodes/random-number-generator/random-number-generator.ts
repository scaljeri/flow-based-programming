import { IFbpNodeWorker, IFbpNodeWorkerOptions, IFbpNode } from '../../types';

export class NodeWorker implements IFbpNodeWorker {
	output: (data: any) => void;

	constructor(options: IFbpNodeWorkerOptions) {
		this.output = options.outputHandler;
	}

	setNode(node: IFbpNode) {
		// my node data
	}

	update(data: any): void {
		console.log('recieved data: ', data);
		this.output({ msg: 'from worker'});
	}
}
