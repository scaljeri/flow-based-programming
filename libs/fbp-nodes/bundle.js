System.register("node", [], function (exports_1, context_1) {
    "use strict";
    var NodeWorker;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NodeWorker = /** @class */ (function () {
                function NodeWorker(node, outputHandler, terminateHandler) {
                    this.node = node;
                    this.outputHandler = outputHandler;
                    this.terminateHandler = terminateHandler;
                }
                NodeWorker.prototype.setTerminateHandler = function (handler) {
                    throw new Error('Method not implemented.');
                };
                NodeWorker.prototype.update = function (data) {
                    throw new Error('Method not implemented.');
                };
                return NodeWorker;
            }());
            exports_1("NodeWorker", NodeWorker);
        }
    };
});
System.register("node-worker", ["worker_threads", "node"], function (exports_2, context_2) {
    "use strict";
    var worker_threads_1, node_1, worker;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (worker_threads_1_1) {
                worker_threads_1 = worker_threads_1_1;
            },
            function (node_1_1) {
                node_1 = node_1_1;
            }
        ],
        execute: function () {
            //--NODE-WORKER--
            // You can do any heavy stuff here, in a synchronous way
            // without blocking the "main thread"
            worker = new node_1.NodeWorker(worker_threads_1.workerData, function (data) { return worker_threads_1.parentPort.postMessage(data); }, function () {
                // TODO
            });
            worker_threads_1.parentPort.on('message', function (d) {
                worker.update(d);
            });
        }
    };
});
