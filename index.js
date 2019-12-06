const express = require('express');
const app = express();
const http = require('http').createServer(app)

// TO-DO : meilleur score 404 stocké sur le serveur





// partie selection  











// partie chat
const io = require('socket.io')(http)

var count = 0;
let nextID = 1;
io.on('connection', function(socket){
  count ++;
  console.log('a client connected ', count);
  socket.on('disconnect', function(){
    console.log('client disconnected');
  });
  socket.on('message',function(data){
    console.log(`l'utilisateur ${socket.pseudo}#${socket.uid} a envoyé : \n ${data}`)
  })
  socket.on('register', function(data){
    socket.pseudo = data
    socket.uid = nextID
    ++nextID
    console.log(`${socket.pseudo} s'est connecté avec l'id #${socket.uid}`)
  })
});

























app.use('/main', express.static(__dirname + '/main-site'));
app.use('/404', express.static(__dirname + '/404-game'));
app.use('/rickroll', express.static(__dirname + '/Rickroll'));
app.use('/escape', express.static(__dirname + '/escape-game'));
app.use('/chat', express.static(__dirname + '/chat'));
app.use('/', express.static(__dirname + '/.'));
app.use(function(req, res, next) {
  res.redirect( '/404-game')
});
/*
app.get('/', (req, res) => {
  res.send("Hello Express app! :) <a>main</a>")
});*/

http.listen(3000, () => {
  console.log('server started');
});