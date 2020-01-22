const express = require('express');
const app = express();
const usersRouter = require('./routes/usersRouter');
const http = require("http");
const socketIo = require("socket.io");

const port = 4001;
app.use('/api', usersRouter);

app.use(express.json());

const server = http.createServer(app);

const io = socketIo(server);

const getApiAndEmit = async socket => {
    socket.emit("On login", "A, b, c")
}

io.on("connection", socket => {
    console.log("new user online")
    socket.on("disconnect", () => {
        console.log("client disconnected")
    });
});

server.listen(port, () => { console.log("listening")});

module.exports = app;

