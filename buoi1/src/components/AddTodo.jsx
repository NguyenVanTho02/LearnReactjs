import React from "react";

const AddTodo = ({ todo, setTodo, handleAddTodo }) => {
  return (
    <div className="add-todo">
      <p className="title">New Todo: </p>
      <div className="input-todo">
        <input
          className="input-value"
          type="text"
          onChange={(e) =>
            setTodo((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />
        <button className="btn-add" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
