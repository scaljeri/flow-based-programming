import { IFbpPacket, IFbpNode } from '../types';

export abstract class NodeBase {
	constructor(protected outputHandler: (packet: IFbpPacket) => void) {
	}

	protected send(packet: IFbpPacket): void {
		this.outputHandler(packet);
	}

	abstract updateNode(node: IFbpNode): void;
	abstract setPacket(packet: IFbpPacket): void;
}
