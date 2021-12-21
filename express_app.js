const { request } = require("express");
const  express  = require("express");
const todoController = require('./controllers/todoController');
const server = express();
const mongoose = require('mongoose');
// const todo = require("./models/todo");
const mongodb_url= 'mongodb://localhost/todos_db';
const PORT = process.env.port || 4000


server.use(express.json());



server.listen(PORT, function(){
    console.log('server has started to run in express');
    mongoose.connect(mongodb_url)
    .then(function(){
        
        console.log('DB is connected');
        server.get('/todo',todoController.getAllTodo);
        server.post('/todo', todoController.insertTodo);
        // server.put('/todo', todoController.updateTodoById);
        // server.delete('/todo',todoController.deleteTodoById);
    }
    )
    .catch(function(error){
        console.log('DB is not connected:', error);

    });

    
});

    
