let express = require("express");
let app = express();

//var app = require('express')();
//let http = require('http').createServer(app);
// let io = require('socket.io')(http);
app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));







app.use(express.static(__dirname + '/public'));

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  var user_number= Math.floor(Math.random()* user_name)
  response.end("Hello " + user_number + "!");
});

//socket test
// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
//   setInterval(()=>{
//     socket.emit('number', parseInt(Math.random()*10));
//   }, 1000);

// });

var port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log("Listening on port ", port);
});

s

//this is only needed for Cloud foundry 
require("cf-deployment-tracker-client").track();
