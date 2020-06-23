import { Observable, Subject } from 'rxjs';

import { IFbpNode, IFbpNodeWorker } from '../../types';

export class WorkerWrapper implements IFbpNodeWorker {
	// private worker: Worker;

	private static workerPath = '/';

	static setWorkerPath(path: string): void {
		this.workerPath = path;
	}

	private constructor(private worker: Worker) {}

	create(
		name: string, path = WorkerWrapper.workerPath): IFbpNodeWorker {

		const filePath = `${path}/${name}.js`.replace(/\/\//, '/');

		const instance = new WorkerWrapper(new Worker(filePath));
		// instance.worker = new Worker(filePath);

		return instance;
	}

	connect(inStream: Observable<any>, outStream: Subject<any>) {

	}

	destroy(): void {

	}

	// private constructor() {
		// TODO: how to resolve the path here!
		// this.worker.postMessage({ type: 'init', payload: 'logger' });
		// var worker = new Worker('/random-number-generator.js')

		// setTimeout(() => {
			// worker.postMessage({ type: 'packet', payload: 'magic' });
		// }, 500);
	// }

	update(data: any): void {
		throw new Error('Method not implemented.');
	}

	setConfig(config: IFbpNode): void {
		this.postMessage('config', config);
	}

	// setData()

	private postMessage(type: string, payload: any) {
		this.worker.postMessage({ type, payload });
	}
}
