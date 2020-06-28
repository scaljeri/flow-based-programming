import { IFbpPosition } from '@scaljeri/fbp-core';

export interface IDrag {
  move: (e: PointerEvent) => void;
  end: (e: PointerEvent) => IDragResult;
}

export interface IDragResult {
  isClick: boolean;
  left: number;
  top: number;
  target: HTMLElement;
}

export interface IDragOptions {
  noResetIfClick?: boolean;
}

interface IDragAndDrop {
  child: HTMLElement;
  parentRect: DOMRect;
  nodeRect: DOMRect;
  initStartX: string;
  initStartY: string;
  startX: number;
  startY: number;
  offsetX: number;
  offsetY: number;
  x?: number;
  y?: number;
  startTime: number;
}

export function startDragNode(event: PointerEvent, parent: HTMLElement): IDrag {
  // tslint:disable-next-line no-string-literal
  const nodeEl: HTMLElement = (event['path'].filter(node => node.nodeName === 'FBP-NODE') || [])[0];

  if (nodeEl) {
    return start(event, nodeEl, parent);
  }
}

export function start(event: PointerEvent, child: HTMLElement, parent: HTMLElement, options: IDragOptions = { }): IDrag {
  let state: IDragAndDrop = null;

  const parentRect = parent.getBoundingClientRect();
  const nodeRect = child.getBoundingClientRect();

  state = {
    parentRect,
    nodeRect,
    child,
    startTime: Date.now(),
    startX: event.clientX,
    startY: event.clientY,
    initStartX: child.style.left,
    initStartY: child.style.top,
    offsetX: event.clientX - nodeRect.x + parentRect.x,
    offsetY: event.clientY - nodeRect.y + parentRect.y
  };

  return {
    move: (e: PointerEvent): void => {
      moveElement(state, e);
    },
    end: (e: PointerEvent): IDragResult => {
      const result = { ...dragEnd(state, e), isClick: isClick(state, e), target: child } as IDragResult;

      if (options.noResetIfClick !== true && result.isClick) {
        reset(state);
      }

      return result;
    }
  };
}

function updateCoordinates(state, event): void {
  const x = event.clientX;
  const y = event.clientY;

  const maxX = state.parentRect.width - state.nodeRect.width;
  const maxY = state.parentRect.height - state.nodeRect.height;
  state.x = Math.min(maxX, Math.max(0, x - state.offsetX));
  state.y = Math.min(maxY, Math.max(0, y - state.offsetY));
}

function moveElement(state: IDragAndDrop, event: PointerEvent): void {
  updateCoordinates(state, event);

  state. child.style.left = `${state.x}px`;
  state. child.style.top = `${state.y}px`;
}

function dragEnd(state: IDragAndDrop, event: PointerEvent): IFbpPosition {
  updateCoordinates(state, event);

  const left = (100 * state.x) / state.parentRect.width;
  const top = (100 * state.y) / state.parentRect.height;

  state.child.style.left = `${left}%`;
  state.child.style.top = `${top}%`;

  return { left, top };
}

function isClick(state: IDragAndDrop, event: PointerEvent): boolean {
  const duration = Date.now() - state.startTime;
  const distanceX = Math.abs(event.clientX - state.startX);
  const distanceY = Math.abs(event.clientY - state.startY);

  console.log(duration, distanceX, distanceY, (distanceX < 10 && distanceY < 10 && duration < 500));
  return distanceX < 10 && distanceY < 10 && duration < 500;
}

function reset(state: IDragAndDrop): void {
  state.child.style.left = state.initStartX;
  state.child.style.top = state.initStartY;
}
