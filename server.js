const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

const PORT = process.env.PORT || 8080;

let users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/dist/simpleChat'));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/simpleChat/index.html'));
});

app.get('/connect', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/simpleChat/index.html'));
});

app.get('/chatRoom', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/simpleChat/index.html'));
});

io.on('connection', function(socket){
    
    io.emit('getConnectedUsers', users);

    socket.on('setUsername', username => {
        console.log(`connected user: ${username}`);
        socket.username = username;
        users.push(socket.username);
        io.emit('userConnected', socket.username);
    });

    socket.on('message', (message) => {
        console.log(`got message ${JSON.stringify(message)}`);
        io.emit(`message`, {user: message.user, content: message.content});
    });

    socket.on('disconnect', ()=>{
        console.log(`user ${socket.username} disconnected`);
        users = users.filter(user => user != socket.username);
        io.emit('userLeft', socket.username);
    });
});

http.listen(PORT, function() {
    console.log(`listening to port ${PORT}`)
});