const initializeSocketServer = require('../Socket/socketManager');
const initializeChatLogic = require('../Chat/chat');

const { server, io } = initializeSocketServer();
server.listen(3000, () => {
    console.log("Ecoute sur 3000");
});
initializeChatLogic(io);



const gameState = {
    players: {},
    currentPlayer: null,
    turnPoints: 0,
    playersReady: 0,
    isGameStarted: false,
};

io.on('connection', (socket) => {
    console.log(`[connection] ${socket.id}`);

    socket.on('createRoom', (room) => {
        socket.join(room);
        console.log("room created", socket.rooms);
        // console.log("nombre de rooms", socket.rooms.size -1);
    })
    socket.on('getRooms', () => {
        let listSocketRooms = io.sockets.adapter.rooms;
        const listRooms = [];
        for (const [key, value] of listSocketRooms.entries()) {
            if (key !== value.values().next().value) {
                listRooms.push(key);
            }
        }
        socket.emit('roomsList', listRooms);
    });

    socket.on('joinRoom', (roomSelected) => {
        socket.join(roomSelected);
        console.log(io.sockets.adapter.rooms)
    })

    socket.on('test', () => {
        console.log("hello everyone !! ")
    })

    socket.on('playerReady', () => {
        gameState.playersReady++;

        if (gameState.playersReady === 2) {

            gameState.isGameStarted = true;
            gameState.playersReady = 0;
            // TODO tirage de carte
            io.emit('gameState', gameState);
            // TODO logique jeu
        } else {
            // TODO maj interface utilisateur
            io.emit('gameState', gameState);
        }
    });


    socket.on('disconnect', () => {
        console.log(`[disconnect] ${socket.id}`);
    });

});

