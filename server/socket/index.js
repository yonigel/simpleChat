const socketController = require('../controllers/socket.controller');

let io;
let users = [];

module.exports = {
    init
}

function init(http) {
    io = require('socket.io')(http);
    socketController.init(io);
    start();
}

function start() {
    io.on('connection', (socket) => {
    
        io.emit('getConnectedUsers', socketController.getUsers());
    
        socket.on('setUsername', username => {
            socketController.setUsername(username, socket);
        })
    
        socket.on('message', (message) => {
            socketController.onChatMessageReceived(message, socket);
        });
    
        socket.on('disconnect', ()=>{
            socketController.onUserDisconnected(socket);
        });
    });

}