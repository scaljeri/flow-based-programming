--NODE-WORKER--

declare const self: any;

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"

const worker = new NodeWorker({
	outputHandler: (data: any) => {
		self.postMessage(data);
	}
});

self.addEventListener('message', function(e: any) {
  worker.update(e.data);
}, false);

