import { FbpSocketTypes } from '../types/socket';
import { IFbpNode } from '../types/node';

export const fixtureFbpBasic = {
    name: 'demo flow',
    nodes: [
        {
            id: 'sfgt23',
            type: 'random-number-generator',
            // type: 'code',
            position: {
                top: 50,
                left: 50
            },
            sockets: [
                { id: 'wfr2efwdv', type: FbpSocketTypes.IN },
                {
                    id: '3ewfvrgw',
                    type: FbpSocketTypes.OUT
                }
            ]
        },
        {
            id: 'sreger4',
            type: 'logger',
            position: {
                left: 30,
                top: 30
            },
            sockets: [{ id: 'wfgfdfg', type: FbpSocketTypes.IN }]
        }
    ] as IFbpNode[],
    connections: [
        {
            from: 'wfr2efwdv',
            to: 'wfgfdfg'
        }
    ]
};
