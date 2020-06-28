import { IFbpPosition } from '@scaljeri/fbp-core';

export interface NodeCoordinate {
  id: string;
  position: IFbpPosition;
}

export class NodeCoordinates {
  static readonly type = '[Node] Coordinates';
  constructor(public payload: NodeCoordinate) { }
}
