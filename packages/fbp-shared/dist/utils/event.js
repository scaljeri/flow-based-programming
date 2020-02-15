"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createMouseEvent(eventType, proto = {}) {
    proto = Object.assign({ bubbles: true, cancelable: true, view: window }, proto);
    let evt = new MouseEvent(eventType, proto);
    return evt;
}
exports.createMouseEvent = createMouseEvent;
function createEvent(eventType, proto = {}) {
    proto = Object.assign({ bubbles: true, cancelable: true, view: window }, proto);
    return new Event(eventType, proto);
}
exports.createEvent = createEvent;
//# sourceMappingURL=event.js.map