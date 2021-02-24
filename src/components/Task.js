import React from "react";

function Task({id, text, category, onDeleteClick}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => onDeleteClick(id)} className="delete">X</button>
    </div>
  );
}

export default Task;
