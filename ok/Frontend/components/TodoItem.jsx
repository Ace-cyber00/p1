import React from "react";

const TodoItem = ( ) =>{
    return(
       <li>
        onClick={(e) => ontoggle(todo._id)}

        
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-lg font-semibold">{todo.title}</h3>
                <p className="text-gray-600">{todo.description}</p>
            </div>

        </div>
        <button onClick={(e) => {
            e.stopPropagation();
            onDelete(todo._id);
        }}
         className="text-red-500 hover:text-red-700">
            Delete </button>
       </li>

       

    )
}

export default TodoItem;