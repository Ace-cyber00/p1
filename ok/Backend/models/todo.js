// Importing mongoose to define the schema for the Todo model
import mongoose from "mongoose"

// Defining the schema for the Todo model
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    
    },
    completed:{
        type: Boolean,
        default:false
    }
});

// Exporting the Todo model based on the defined schema
export const Todo = mongoose.model("Todo",todoSchema);