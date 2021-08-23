require('dotenv').config()
let express = require("express");
const indexRoute =require('./routes/projects')
let app = express();
var cors = require("cors")
const {MongoClient} = require('mongodb')



// Database connection

const uri = "mongodb+srv://SIT725:g7rPA5zP1991@sit-725-2021-t2-prac4.1mguh.mongodb.net/SIT-725-2021-t2-Prac4?retryWrites=true&w=majority"
const client = new MongoClient(uri,{useNewUrlParser:true})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const createColllection = (collectionName) => {
  client.connect((err,db) => {
      projectCollection = client.db().collection(collectionName);
      if(!err) {
          console.log('MongoDB Connected')
      }
      else {
          console.log("DB Error: ", err);
          process.exit(1);
      }
  })
}

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



app.use(indexRoute)


// app.post('/api/projects',(req,res) => {
//   console.log("New Project added", req.body)
//   let newProject = req.body;
//   // itemsList.push(newProject)
//   // console.log(itemsList)
//   insertProjects(newProject,(err,result) => {
//     if(err) {
//         res.json({statusCode: 400, message: err})
//     }
//     else {
//         res.json({statusCode: 200, message:"Project Successfully added", data: result})
//     }
// })
//   // res.json({statusCode: 200, message:"Project Successfully added", data: newProject})
  
// })


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
  createColllection("pets")
});

//this is only needed for Cloud foundry 
require("cf-deployment-tracker-client").track();
