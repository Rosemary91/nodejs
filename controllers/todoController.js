const todo = require('../models/todo');

function insertTodo(req, res){
    console.log(req.body);
   todo.create(req.body)
    .then(function(d){
        res.status(200).json({message: "todo added",success:true,data:d});
    }).catch(function(error){
        res.status(500).json({message: 'error adding todo'+error.message});
    })
}

function updateTodo(){

}

function deleteTodo(){

}

function getTodoById(){

}

async function getAllTodo(req,res){
    try {
        
        const data = await todo.find({});
        res.status(200).json({success: true,message: 'data found',data:data});
    } catch (error) {
        res.status(401).json({success:false,message:console.error.message});
    }
}

module.exports={insertTodo, updateTodo,deleteTodo,getTodoById,getAllTodo}





