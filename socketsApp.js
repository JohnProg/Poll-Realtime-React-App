var connections     = [];
var title           = "Untitled Presentation";
var audience        = [];
var speaker         = {};
var questions       = require('./appQuestions');
var currentQuestion = false;
var results         = {
    a:0,
    b:0,
    c:0,
    d:0
};

module.exports = function (io) {
  io.sockets.on('connection', function (socket) {
    
    socket.once('disconnect', function () {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Disconnected: " + connections.length + " remaining.");
        socket.disconnect();
    });
    
    socket.emit('welcome', {
      title: title,
      audience: audience,
      speaker : speaker.name,
      questions: questions,
      currentQuestion: currentQuestion
    });

    connections.push(socket);
    console.log("Connected: " + connections.length + " sockets.");
  });
};
