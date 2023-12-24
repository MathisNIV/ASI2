const initializeSocketServer = require('../Socket/socketManager');
const initializeChatLogic = require('../Chat/chat');

const { server, io } = initializeSocketServer();
server.listen(3000, () => {
    console.log("Ecoute sur 3000");
});
initializeChatLogic(io);

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

    socket.on('disconnect', () => {
        console.log(`[disconnect] ${socket.id}`);

    });
});
