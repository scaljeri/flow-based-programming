export function bindToClick(el: HTMLElement, callback: ((e: Event) => void)): void {
    let isDown: PointerEvent;
    let isDrag: PointerEvent;

    function drag(event: PointerEvent) { 
        isDrag = event;
    }

    function up(event: Event) {
        if (isDown && 
            Math.abs(isDrag.clientX - isDown.clientX) < 5 &&
            Math.abs(isDrag.clientY - isDown.clientY) < 5) {
                console.log('up yes');
            callback(event);
        }
    }

    el.addEventListener('mousedown', (event: PointerEvent) => {
        isDown = event;
        isDrag = event;

        el.addEventListener('mousemove', (event: PointerEvent) => {
            drag(event);
            el.removeEventListener('mousemove', drag);
        });

        el.addEventListener('mouseup', (e: Event) => {
            el.removeEventListener('mousemove', up);
            up(event);
            isDown = null;
            isDrag = null;
        });
    });
}