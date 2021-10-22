const express = require('express')
const app = express()
const http = require('http').createServer()
const io = require('socket.io')(http)
var mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 2500;
//BodyParser
app.use(bodyParser.json());

//Paste the json and show
app.use(express.urlencoded({ extended: false }));
var topup = 0;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ratechallenge"
  });

con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

//Socket connection and listen
io.on('connection', (socket) => {
    socket.on("listening", () => {
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
//Route
app.use('/item', require('./routes/item'));
//create a port to REST API
var server = app.listen('3100', console.log(`Listening port 3100`));
//Socket Port
http.listen(PORT, () => {
    console.log("Listening port " + PORT)
})