var connections = [],
    title = "Title Default";

module.exports = function (io) {
  io.sockets.on('connection', function (socket) {
    socket.once('disconnect', function () {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Disconnected: " + connections.length + " remaining.");
        socket.disconnect();
    });
    connections.push(socket);
    socket.emit('welcome', {
      title: title
    });
    console.log("Connected: " + connections.length + " sockets connected.");
  });
};
