const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost",
        methods: ["GET", "POST"]
    }
});


app.get('/play', (req, res) => {
    res.json({
        message: 'Hello world',
    });
})

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('msg', (msg) => {
        console.log("ca fonctionne !");
        io.emit('msg', { ...msg, username: socket.username });
    });

    socket.on('setUsername', (username) => {
        console.log('Setting username:', username);
        socket.username = username;
    });


server.listen(3000, () => {
    console.log('Ecoute sur le port 3000')
});
