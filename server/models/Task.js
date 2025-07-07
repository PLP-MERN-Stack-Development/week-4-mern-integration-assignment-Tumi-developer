const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const TaskModel = mongoose.model('tasks', TaskSchema)
module.exports = TaskModel