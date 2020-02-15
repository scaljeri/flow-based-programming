export declare enum FbpSocketTypes {
    IN = 0,
    OUT = 1
}
export interface FbpSocket {
    color?: string;
    label?: string;
    type: FbpSocketTypes;
    id: string;
}
