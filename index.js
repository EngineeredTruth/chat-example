var express = require('express');
var app = express();

//ONE
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname))

//TWO
io.on('connection', function(socket){
  //THREE
  socket.on("chat_message", function(msg){
    
  //   // Make a databasecall
    
  //   // Do nothing
    
  //   // Tell other people
   
    
  //   //FOUR Respond
    // socket.emit('cars_response',  + ' vrooom');

  });

  socket.on("trucks", trucksCtrl.getTrucks)
  socket.on("van", vansCtr.getVans)
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
