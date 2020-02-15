"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = require("../types/socket");
exports.fixtureFbpBasic = {
    name: 'demo flow',
    nodes: [
        {
            id: 'sfgt23',
            type: 'random-number-generator',
            position: {
                x: 50,
                y: 50
            },
            sockets: [
                { id: 'wfr2efwdv', type: socket_1.FbpSocketTypes.IN },
                {
                    id: '3ewfvrgw',
                    type: socket_1.FbpSocketTypes.OUT
                }
            ]
        },
    ],
    connections: [
        {
            from: 'wfr2efwdv',
            to: 'wfgfdfg'
        }
    ]
};
//# sourceMappingURL=fbp-basic.js.map