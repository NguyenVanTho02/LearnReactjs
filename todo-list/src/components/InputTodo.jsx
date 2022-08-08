import React from "react";
import "./inputTodo.css";

const InputTodo = ({ handleInput, setTodo }) => {
  return (
    <div className="box-input">
      <input
        className="input-todo"
        type="text"
        placeholder="What do you need do?"
        onChange={(e) =>
          setTodo((prev) => ({
            ...prev,
            title: e.target.value,
          }))
        }
        onKeyUp={handleInput}
      />
    </div>
  );
};

export default InputTodo;
