'use strict'

// Library imports
const
    path = require('path'),
    express = require('express'),
    http = require('http'),
    socketIO = require('socket.io');


// Local imports
const {port} = require('../config');

// Setting up the path for the public directory
const
    publicPath = path.join(__dirname, '../public');

// Initializing the app
var app = express();

// Initializing the server
var server = http.createServer((app));

// Initializing the web socket
var io = socketIO(server);

// Set up the middleware
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
})

// Set up the app's port
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
