const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/dist/simpleChat'));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/simpleChat/index.html'));
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('message', (message) => {
        console.log(`got message ${message}`);
        io.emit(`message`, message);
    });
    socket.on('disconnect', ()=>{
        console.log('user disconnected');
    })
});

http.listen(PORT, function() {
    console.log(`listening to port ${PORT}`)
});