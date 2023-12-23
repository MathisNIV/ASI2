const axios = require('axios');

function initializeChatLogic(io) {
    io.on('connection', (socket) => {
        socket.on('msg', (msg) => {
            io.emit('msg', { ...msg });
            try {
                axios.post('http://localhost:80/users-api/message', msg).then((response) => {
                    // Handle the response if needed
                });
            } catch (error) {
                console.error('Error posting message to Spring backend:', error.message);
            }
        });

        socket.on('getUsers', async () => {
            console.log("socket ok");
            try {
                const response = await axios.get('http://localhost:80/users-api/users');
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
    });
}

module.exports = initializeChatLogic;
