const express = require('express')
const router = express.Router()


// insert into database
const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
  }
  
  // get projects from the database
  const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
  }

router.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
    // res.json({statusCode: 200, data: itemsList, message:"Success"})
  })

  router.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    let newProject = req.body;
    // itemsList.push(newProject)
    // console.log(itemsList)
    insertProjects(newProject,(err,result) => {
      if(err) {
          res.json({statusCode: 400, message: err})
      }
      else {
          res.json({statusCode: 200, message:"Project Successfully added", data: result})
      }
  })
    // res.json({statusCode: 200, message:"Project Successfully added", data: newProject})
    
  })



module.exports = router