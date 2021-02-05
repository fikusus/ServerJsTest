const { promises } = require('fs');

const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    console.log("connection");
  client.on('event', data => { console.log("data")});
  client.on('disconnect', () => { /* … */ });
});
server.listen(process.env.PORT || 3000);