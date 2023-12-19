const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const { Server } = require('socket.io');
const axios = require('axios');

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
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('msg', (msg) => {
        console.log("ca fonctionne !");
        io.emit('msg', { ...msg, username: socket.username }); // include username in the emitted message
    });

    socket.on('getUsers', async () => {
        try {
            const response = await axios.get('http://your-spring-backend-url/users');
            const users = response.data;
            console.log('Users from Spring backend:', users);
        } catch (error) {
            console.error('Error fetching users from Spring backend:', error.message);
        }
    });

    socket.on('setUsername', (username) => {
        console.log('Setting username:', username);
        socket.username = username;
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Ecoute sur le port 3000');
});
