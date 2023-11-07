import React, { useState } from "react";
import "./App.css";
import ToDoInput from "./Component/ToDoInput";
import ToDoList from "./Component/ToDoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addTask = (text) => {
    setListTodo([...listTodo, text]);
  };

  const deleteTask = (index) => {
    const updatedList = [...listTodo];
    updatedList.splice(index, 1);
    setListTodo(updatedList);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <h1>TODO</h1>
        <ToDoInput addTask={addTask} />
        <hr />
        <ToDoList list={listTodo} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
