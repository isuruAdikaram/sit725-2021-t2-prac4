require('dotenv').config()
let express = require("express");
let app = express();
var cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


//var app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);


const itemsList =[
  {
    title:"Cowardly-cat",
    image:"assets/cat-1.jpg",
    link:"stupidcats.com",
    description:"wacked birds all day"
  },
  {
    title:"Enlightened-cat",
    image:"assets/cat-2.jpg",
    link:"evenstupidercats.com",
    description:"harased dogs all day"
  }
]




var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get("/test",  (req, res) =>{
  var user_name = req.query.user_name;
  res.end("Hello " + user_name + "!");
});

app.get('/api/projects',(req,res) => {
  // getProjects((err,result) => {
  //     if(err) {
  //         res.json({statusCode: 400, message: err})
  //     }
  //     else {
  //         res.json({statusCode: 200, message:"Success", data: result})
  //     }
  // })
  res.json({statusCode: 200, data: itemsList, message:"Success"})
})


app.post('/api/projects',(req,res) => {
  console.log("New Project added", req.body)
  let newProject = req.body;
  itemsList.push(newProject)
  // console.log(itemsList)
  console.log(newProject)
  // res.json({statusCode: 200, message:"Project Successfully added", data: newProject})
  res.json({})
})


//socket test
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);

});


http.listen(port,()=>{
  console.log("Listening on port ", port);
});

//this is only needed for Cloud foundry 
require("cf-deployment-tracker-client").track();
