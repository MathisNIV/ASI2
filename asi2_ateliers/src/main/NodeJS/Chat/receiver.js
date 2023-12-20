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

    socket.on('msg',  (msg) => {
        io.emit('msg', {msg, username: socket.userId });
        try {
            axios.post('http://localhost:8083/message', {
                body: msg
            })
                .then((response) => {
                    console.log(response);
                });
        } catch (error) {
            console.error('Error posting message to Spring backend:', error.message);
        }
    });

    socket.on('getUsers', async () => {
        try {
            const response = await axios.get('http://localhost:8083/users');
            const users = response.data;
            console.log('Users from Spring backend:', users);
        } catch (error) {
            console.error('Error fetching users from Spring backend:', error.message);
        }
    });

    socket.on('setUsername', (userId) => {
        console.log('Setting username:', userId);
        socket.userId = userId;
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Ecoute sur le port 3000');
});
