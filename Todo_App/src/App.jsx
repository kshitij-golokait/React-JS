import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (name, date) => {
    const newTodo = { id: Date.now(), name, date };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newName, newDate) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name: newName, date: newDate } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <AppName />
      <div className="container text-center">
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </div>
  );
}

export default App;
