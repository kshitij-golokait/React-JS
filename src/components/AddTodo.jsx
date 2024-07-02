import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleAdd = () => {
    if (todoName && todoDate) {
      addTodo(todoName, todoDate);
      setTodoName("");
      setTodoDate("");
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
      </div>
      <div className="col-3">
        <input
          type="date"
          value={todoDate}
          onChange={(e) => setTodoDate(e.target.value)}
        />
      </div>
      <div className="col-1">
        <button type="button" className="btn btn-success" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
