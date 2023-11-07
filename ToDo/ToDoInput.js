import React, { useState } from "react";

function ToDoInput({ addTask }) {
  const [inputText, setInputText] = useState("");

  const handleAddTask = () => {
    if (inputText.trim() !== "") {
      addTask(inputText);
      setInputText("");
    }
  };

  return (
    <div className="input-cont">
      <input
        type="text"
        className="input-box"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="add-btn" onClick={handleAddTask}>
        +
      </button>
    </div>
  );
}

export default ToDoInput;
