// src/App.jsx

import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import { api } from "./api"; // this must have api base set to "/api/todos"

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      const res = await api.get("/"); // <- baseURL should be /api/todos
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  // Add new todo
  const addTodo = async () => {
    if (title.trim() === "") return;
    try {
      await api.post("/", { title, description });
      setTitle("");
      setDescription("");
      fetchTodos();
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await api.delete(`/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  // Toggle completed
  const toggleComplete = async (id) => {
    try {
      await api.put(`/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("Error toggling todo:", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">📋 To-Do App</h1>

        {/* Input Form */}
        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="border p-2 rounded flex-1"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
