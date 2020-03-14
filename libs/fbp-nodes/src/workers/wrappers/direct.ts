import { IFbpNode } from '@scaljeri/fbp-shared';

export class DirectWrapper {
	private instance: any;

	async initialize(path: string): Promise<void> {
		const mod = await import(path);
		this.instance = new mod.DirectWrapper();
	}

	setNodeConfig(config: IFbpNode): void {

	}
}
