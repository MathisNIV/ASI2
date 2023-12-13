const express = require('express');
const {createServer} = require('node:http');
const io = require('node:socket.io')(server);

const app = express();
const server = createServer(app);
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})


server.listen(3000, () => {
    console.log('Ecoute sur le prt 3000')
})