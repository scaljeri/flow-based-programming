import { IFbpSocket } from './socket';

export interface IFbpPacket<T = any> {
	socketId: string;
	payload: T;
}
