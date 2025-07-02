import express from "express";

import {Todo} from '../models/todo.js';

const router = express.Router();

// Create a new todo
router.post('/todos', async (req , res) =>{
 try {
    const {title,description} = req.body;
    const newTodo = new Todo({
        title,
        description
    });
    await newTodo.save();
    res.status(201).json({
        message: 'Todo created successfully',

    })
    
 } catch (error) {
    res.status(500).json({
        message: 'error creating todo',
        error: error.message
    })
 }
})

// Get all todos
router.get('/todos',async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({
            message:'Error fetching todos',
            error: error.message
        })
    }
});

// Update a todo
router.put('/todos/:id' , async (req,res) =>{
    try {
        const {id} = req.params;
        const {title, description, completed} = req.body;
        const updatedtodo = await Todo.findByIdAndUpdate(id,{
            title,
            description,
            completed
        },{new: true,
            runValidators: true
        });
        if(!updatedtodo){
            return res.status(404).json({
                message: 'Todo not found'
            });
        }
    }catch (error) {
        res.status(500).json({
            message: 'Error updating todo',
            error: error.message
        })
    }
})

// Delete a todo
router.delete('/todos/:id', async (req, res) => {

    try {
        const {id} = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({
                message: 'Todo not found'
            });
        }
    res.json({
      message: 'Todo deleted successfully',
      deletedTodo
    });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting todo',
            error: error.message
        });
        
    }
});


// Export the router to use in the main server file
export default router;

// This code defines the routes for the todo application, including creating, fetching, updating, and deleting todos.
// It uses Express.js for routing and Mongoose for interacting with MongoDB.

