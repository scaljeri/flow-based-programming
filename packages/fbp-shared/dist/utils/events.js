"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bindToClick(el, callback) {
    let isDown;
    let isDrag;
    function drag(event) {
        isDrag = event;
    }
    function up(event) {
        if (isDown &&
            Math.abs(isDrag.clientX - isDown.clientX) < 5 &&
            Math.abs(isDrag.clientY - isDown.clientY) < 5) {
            console.log('up yes');
            callback(event);
        }
    }
    el.addEventListener('mousedown', (event) => {
        isDown = event;
        isDrag = event;
        el.addEventListener('mousemove', (event) => {
            drag(event);
            el.removeEventListener('mousemove', drag);
        });
        el.addEventListener('mouseup', (e) => {
            el.removeEventListener('mousemove', up);
            up(event);
            isDown = null;
            isDrag = null;
        });
    });
}
exports.bindToClick = bindToClick;
//# sourceMappingURL=events.js.map