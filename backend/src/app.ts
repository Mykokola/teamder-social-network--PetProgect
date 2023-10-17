import express from 'express';
import * as WebSocket from 'ws';
import { Server } from 'http';
import * as http from 'http';

const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3001;
const user = require('./express/routes/user')
const server:Server = http.createServer(app);
const wss = new WebSocket.Server({server})
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

app.use('/auth',user)



const broadcastMessage = (message) => {
  const {messages} = message
  wss.clients.forEach(client => {
    client.send(JSON.stringify(messages))
  })
}
wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (message: any) => {
    message = JSON.parse(message)
      broadcastMessage(message)
  });

});


app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
  });

  server.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});