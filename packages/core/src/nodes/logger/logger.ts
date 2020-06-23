import { NodeBase } from '../../utils/node-base';
import { IFbpNode, IFbpPacket } from '../../types';

export class NodeWorker extends NodeBase {
	updateNode(node: IFbpNode) {
		// my node data
	}

	setPacket(packet: IFbpPacket): void {
		console.log('recieved data: ', packet);
		this.send({ socketId: 'yolo', payload: 'thos os wprlogm' });
	}
}
