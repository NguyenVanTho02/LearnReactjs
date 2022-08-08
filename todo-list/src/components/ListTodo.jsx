import React from "react";
import "./listTodo.css";
import ItemTodo from "./ItemTodo";

const ListTodo = ({ listTodo, handleDelete, handleCompleted }) => {
  return (
    <div className="list-todo">
      {listTodo.map((item, index) => (
        <ItemTodo
          title={item.title}
          index={index}
          handleDelete={handleDelete}
          handleCompleted={handleCompleted}
          completed={item.completed}
        />
      ))}
    </div>
  );
};

export default ListTodo;
