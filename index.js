const { promises } = require('fs');

let old = new Date();

const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    console.log("connection");
  client.on('event', data => { 
    console.log(new Date() - old)
    old = new Date();
  });
  client.on('disconnect', () => { /* … */ });
});
server.listen(process.env.PORT || 3000);