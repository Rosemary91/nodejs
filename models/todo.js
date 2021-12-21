const mongoose = require('mongoose');

const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    deadline: String,
    isCompleted: Boolean

},{timestamps:true});

const todo = mongoose.model('todo',todoSchema);
module.exports= todo;
