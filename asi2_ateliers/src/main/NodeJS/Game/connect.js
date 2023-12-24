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

    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log("room created", socket.rooms);
        // console.log("nombre de rooms", socket.rooms.size -1);
    })
    socket.on('getRooms', () => {
        console.log("liste rooms", io.sockets.adapter.rooms);
    });


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
