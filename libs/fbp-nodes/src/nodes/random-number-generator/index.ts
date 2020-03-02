import { IFbpNodeWorker, IFbpNodeWorkerOptions } from '@scaljeri/fbp-shared';

export class NodeWorker implements IFbpNodeWorker {
	output: (data: any) => void;

	constructor(options: IFbpNodeWorkerOptions) {
		this.output = options.outputHandler;
	}

	update(data: any): void {
		console.log('recieved data: ', data);
		this.output({ msg: 'from worker'});
	}
}
