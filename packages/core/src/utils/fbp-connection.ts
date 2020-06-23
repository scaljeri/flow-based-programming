import { Subscription } from 'rxjs';
import { FbpStreams } from './fbp-streams';

export class FbpConnection {
	private socketInId!: string;
	private socketOutId!: string;
	private subscription: Subscription | null = null;

	constructor(private streams: FbpStreams) { }

	connect(socketInId: string, socketOutId: string): void {
		this.socketInId = socketInId;
		this.socketOutId = socketOutId;
		const output = this.streams.produce(socketOutId);

		this.subscription = this.streams.consume(socketInId).subscribe((value: any) => {
			output.next(value);
		});
	}

	destroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
			this.streams.unsubscribe(this.socketInId, this.socketOutId);

			this.subscription = null;
		}
	}
}
