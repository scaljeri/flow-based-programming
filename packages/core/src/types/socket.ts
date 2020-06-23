export enum FbpSocketTypes {
	IN,
	OUT,
	INTERN
}
export interface IFbpSocket {
	color?: string;
	label?: string;
	type: FbpSocketTypes;
	id: string;
}
