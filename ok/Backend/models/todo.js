// Importing mongoose to define the schema for the Todo model
const mongoose = require("mongoose");

// Defining the schema for the Todo model
const todoSchema = new moongonse.schema({
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
export const Todo = moongose.model("Todo",todoSchema);