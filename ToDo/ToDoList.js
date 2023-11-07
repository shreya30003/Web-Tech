import React from "react";

function ToDoList({ list, deleteTask }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index} className="list">
          {item}
          <span className="icons" onClick={() => deleteTask(index)}>
            <button className="btn btn-danger btn-sm">
              <i className="fas fa-trash"></i>
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
