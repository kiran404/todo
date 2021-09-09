import React from "react";

const Todo = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <div style={{ border: "1px solid black", margin: 10 }}>
      <p>Id:{todo.id}</p>
      <p>Description:{todo.description}</p>
      <p>completed:{String(todo.completed)}</p>
      <button onClick={onToggle}>Toggle</button>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default Todo;
