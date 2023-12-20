const express = require('express');
const http = require('http');
const { join } = require('path');
const { Socket } = require('socket.io');
const { Server } = require('socket.io');


const app = express();
const server = http.createServer(app);

app.get('/game', (req, res) => {
    res.json({
        message: 'Hello ça marche',
    });
});

server.listen(3001, () => {
    console.log(`Ecoute sur 3001`);
});

const io = new Server(server, {
    cors: {
        origin: "http://localhost",
        methods: ["GET", "POST"]
    }
});


let rooms = [];
io.on('connection', (socket) => {
    console.log(`[connection] ${socket.id}`);

    socket.on('playerData', (player) => {
        console.log(`[playerData] ${player.username}`);

        let room = null;

        if (!player.roomId) {
            room = createRoom(player);
            console.log(`[create room ] - ${room.id} - ${player.username}`);
        } else {
            room = rooms.find(r => r.id === player.roomId);

            if (room === undefined) {
                return;
            }
            player.roomId = room.id;
            room.players.push(player);
        }

        socket.join(room.id);

        io.to(socket.id).emit('join room', room.id);

        if (room.players.length === 2) {
            io.to(room.id).emit('start game', room.players);
        }
    })

    socket.on('disconnect', () => {
        console.log(`[disconnect] ${socket.id}`);
        let room = null;

        rooms.forEach(r => {
            r.players.forEach(p => {
                if (p.socketId === socket.id && p.host) {
                    room = r;
                    rooms = rooms.filter(r => r !== room);
                }
            })
        })
    });

    // socket.on('get rooms', () => {
    //     io.to(socket.id).emit('list rooms', rooms);
    // });
});



function createRoom(player) {
    const room = { id: roomId(), players: [] };

    player.roomId = room.id;

    room.players.push(player);
    rooms.push(room);

    return room;
}

function roomId() {
    return Math.random().toString(36).substr(2, 9);
}