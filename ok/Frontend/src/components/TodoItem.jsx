import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li onClick={() => onToggle(todo._id)} className="cursor-pointer p-2 border-b">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{todo.title}</h3>
          <p className="text-gray-600">{todo.description}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering toggle
            onDelete(todo._id);
          }}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
