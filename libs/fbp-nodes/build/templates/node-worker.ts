import { parentPort } from 'worker_threads';

// import { NodeWorker } from './node';

--NODE-WORKER--

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"

const worker = new NodeWorker({ outputHandler: (data: any) => parentPort!.postMessage(data) });

parentPort!.on('message', (d: any) => {
	worker.update(d);
})
