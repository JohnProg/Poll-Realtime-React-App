var express = require('express'),
    app = express(),
    server,
    io,
    state;

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));
server = app.listen(process.env.PORT || 3000);
io = require('socket.io').listen(server);
state = require('./socketsApp')(io);
console.log('Running');
