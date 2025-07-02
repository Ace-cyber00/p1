import React from "react"
import TodoItem from "./TodoItem.jsx"

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList;
