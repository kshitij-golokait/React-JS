import React, { useState } from "react";

function TodoItem({ todo, deleteTodo, editTodo }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(todo.name);
  const [date, setDate] = useState(todo.date);

  const handleEdit = () => {
    editTodo(todo.id, name, date);
    setEditing(false);
  };

  const handleCancel = () => {
    setName(todo.name);
    setDate(todo.date);
    setEditing(false);
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "date") {
      setDate(e.target.value);
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        {editing ? (
          <input type="text" name="name" value={name} onChange={handleChange} />
        ) : (
          todo.name
        )}
      </div>
      <div className="col-3">
        {editing ? (
          <input type="date" name="date" value={date} onChange={handleChange} />
        ) : (
          todo.date
        )}
      </div>
      <div className="col-1">
        {editing ? (
          <button className="btn btn-success" onClick={handleEdit}>
            Save
          </button>
        ) : (
          <button className="btn btn-info" onClick={() => setEditing(true)}>
            Edit
          </button>
        )}
      </div>
      <div className="col-1">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
      {editing && (
        <div className="col-1">
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
