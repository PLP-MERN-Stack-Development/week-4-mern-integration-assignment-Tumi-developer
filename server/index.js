const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TaskModel = require('./models/Task')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://Tumisang:2JVyPQzPUVZtXa1h@tumisang.ffhodvl.mongodb.net/tasks")

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    TaskModel.findOne({email: email})
    .then(user => {
      if(user) {
        if(user.password === password) {
          res.json('Success')
        } else {
          res.json('the password is incorrect')
        }
      } else {
        res.json('No record existing')
      }
    })
})


app.post('/register', (req, res) => {
    TaskModel.create(req.body)
    .then(tasks => res.json(tasks))
    .catch(err =>  res.json(err))
})

app.listen(3001, () => {
  console.log("server is running")
})