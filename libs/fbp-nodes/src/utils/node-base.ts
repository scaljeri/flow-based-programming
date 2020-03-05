import { IFbpPacket, IFbpNodeWorker, IFbpNodeWorkerOptions, IFbpNode } from '@scaljeri/fbp-shared';

export abstract class NodeBase {
	constructor(protected outputHandler: (packet: IFbpPacket) => void) {
	}

	protected send(packet: IFbpPacket): void {
		this.outputHandler(packet);
	}

	abstract updateNode(node: IFbpNode): void;
	abstract setPacket(packet: IFbpPacket): void;
}
