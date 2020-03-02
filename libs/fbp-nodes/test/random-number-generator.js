"use strict";
const exports = {};

Object.defineProperty(exports, "__esModule", { value: true });
var NodeWorker = /** @class */ (function () {
    function NodeWorker(options) {
        this.output = options.outputHandler;
    }
    NodeWorker.prototype.update = function (data) {
        console.log('recieved data: ', data);
        this.output({ msg: 'from worker' });
    };
    return NodeWorker;
}());
exports.NodeWorker = NodeWorker;
// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"
var worker = new NodeWorker({
    outputHandler: function (data) {
        self.postMessage(data);
    }
});
self.addEventListener('message', function (e) {
    worker.update(e.data);
}, false);
