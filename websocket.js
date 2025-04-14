//Server.js=
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log("Client connected.");
  ws.on('message', function incoming(message) {
    console.log('Received:', message);
  });

  ws.on('close', () => {
    console.log("Client disconnected.");
  });

  ws.send('Hello from server!');
});

//Client.js
const WebSocket = require('ws');
const readline = require('readline');

const ws = new WebSocket('ws://localhost:8080');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

ws.on('open', () => {
  rl.question("Enter a message to send to server: ", (msg) => {
    ws.send(msg);
    rl.close();
  });
});

ws.on('message', (data) => {
  console.log("Received from server:", data.toString());
});
