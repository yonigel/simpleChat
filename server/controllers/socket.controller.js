let io;
let users = [];

module.exports = {
    setUsername,
    onChatMessageReceived,
    onUserDisconnected,
    init,
    getUsers
}

function init(getio) {
    io = getio;
}

function getUsers() {
    return users;
}

function setUsername(username, socket) {
    console.log(`connected user: ${username}`);
    socket.username = username;
    users.push(socket.username);
    io.emit('userConnected', socket.username);
}

function onChatMessageReceived(message, socket) {
    console.log(`got message ${JSON.stringify(message)}`);
    io.emit(`message`, {user: message.user, content: message.content});
}

function onUserDisconnected(socket) {
    console.log(`user ${socket.username} disconnected`);
    users = users.filter(user => user != socket.username);
    io.emit('userLeft', socket.username);
}