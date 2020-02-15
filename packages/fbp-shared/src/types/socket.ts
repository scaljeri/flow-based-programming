export enum FbpSocketTypes {
    IN,
    OUT
}
export interface FbpSocket {
    color?: string;
    label?: string;
    type: FbpSocketTypes;
    id: string;
}