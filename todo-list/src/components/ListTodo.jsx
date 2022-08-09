import React from "react";
import "./listTodo.css";
import ItemTodo from "./ItemTodo";

const ListTodo = ({
  listTodo,
  handleDelete,
  handleCompleted,
  handleChange,
  saveChangeTodo,
  activeChange,
}) => {
  return (
    <div className="list-todo">
      {listTodo.map((item, index) => (
        <ItemTodo
          key={index}
          title={item.title}
          index={index}
          change={item.change}
          handleDelete={handleDelete}
          handleCompleted={handleCompleted}
          handleChange={handleChange}
          activeChange={activeChange}
          saveChangeTodo={saveChangeTodo}
          completed={item.completed}
        />
      ))}
    </div>
  );
};

export default ListTodo;
