const express = require("express");
const handlebars = require('express-handlebars');
const path = require("path");
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const bodyParser = require('body-parser');
const routing = require('./routes');
const server = http.createServer(app);
const io = socketIO(server);
const session = require('express-session');
const fileUpload = require('express-fileupload');

app.use(fileUpload({limits: {fileSize: 10000000, },abortOnLimit: true,}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'ugsidhviusdhduieq', resave: false, saveUninitialized: false, cookie: { maxAge: 3000000 }}))
app.use(express.static(path.join(__dirname, '/public')));
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'template'
}));
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use('/', routing);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server läuft auf Port 3000!');
});
