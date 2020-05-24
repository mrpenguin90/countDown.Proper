// dependencies
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

// Express listener
    // listener definition express
    const app = express();

    // defining the path to the client
    const clientPath = `${__dirname}/../client`;
    console.log(`Serving static from ${clientPath}`);

    // serving static from the clientpath
    app.use(express.static(clientPath));

    // creating the server
    const server = http.createServer(app);

// Socket.io listener
    const io = socketio(server);

    io.on('connection', (sock) => {
        console.log('Someone connected');
        sock.emit('message', 'Hi, you are connected');
    });

// output & logging
server.on('error', (err) => {
    console.error('Server error:', err);
});

server.listen(8080, () => {
    console.log('Countdown started on 8080');
});