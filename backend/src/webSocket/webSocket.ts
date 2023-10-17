import * as WebSocket from 'ws'; // Оновлено імпорт WebSocket

const broadcastMessage = (wss:WebSocket.Server,message) => {
    const {messages} = message
    wss.clients.forEach(client => {
      client.send(JSON.stringify(messages))
    })
  }

const setupSoccetConection = (wss:WebSocket.Server) => {
  wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (message: any) => {
      message = JSON.parse(message)
        broadcastMessage(wss,message)
    });
  
  });}
  export  {setupSoccetConection,broadcastMessage}