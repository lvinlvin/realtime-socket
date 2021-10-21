const express = require('express')
const app = express()
const http = require('http').createServer()
const io = require('socket.io')(http)
const port = process.env.PORT || 2500;

io.on('connection', (socket) => {
    socket.on("add_review", () => {
        io.emit("add_review");
    })
})

//CORS 
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    //set your custom auth here,example:auth-token i create my own
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Custom-Header");
    
    next();
});

http.listen(port, () => {
    console.log("Listening port " + port)
})