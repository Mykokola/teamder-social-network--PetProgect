"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.broadcastMessage = exports.setupSoccetConection = void 0;
const broadcastMessage = (wss, message) => {
    const { messages } = message;
    wss.clients.forEach(client => {
        client.send(JSON.stringify(messages));
    });
};
exports.broadcastMessage = broadcastMessage;
const setupSoccetConection = (wss) => {
    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            message = JSON.parse(message);
            broadcastMessage(wss, message);
        });
    });
};
exports.setupSoccetConection = setupSoccetConection;
//# sourceMappingURL=webSocket.js.map