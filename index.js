// var server = require('http').createServer();
// var io = require('socket.io')(server);
// var cors = require('cors');

// io.sockets.on('connection', function (socket) {
//     console.log('socket connected');

//     socket.on('disconnect', function () {
//         console.log('socket disconnected');
//     });

//     socket.emit('text', 'wow. such event. very real time.');
// });

// server.listen(8000);


var socket = require('socket.io');
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var io = socket.listen(server);

io.sockets.on('connection', function (client) {
    console.log("New client !" + client.handshake.sessionID);

    client.on('message', function (data) {
        console.log('Message received ' + data.message);
        io.sockets.emit('message', { message: data.message });
    });

    client.on('emitt', function (data) {
        console.log('Message received ' + data);
        io.sockets.emit('message', { message: data });
    });

    client.on('accell', function (data) {
        console.log(data);
        // io.sockets.emit('message', { message: data });
    });

});

server.listen(8080);
