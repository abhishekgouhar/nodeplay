var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//get DotENV 
const nodeEnv = require('dotenv').config();
//print Port
console.log('PORT: '+process.env.PORT);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  socket.on('chat-message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat-message', msg+1);
  });
  socket.on('disconnect',function(msg){
  	console.log('user disconnected');
  });
});
   


http.listen(3000, function(){
  console.log('listening on *:3000');
});