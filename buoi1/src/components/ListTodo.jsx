import React from "react";
import ItemTodo from "./ItemTodo";
import "./listTodo.css";

const ListTodo = ({ arrTodo, handleDeleteTodo }) => {
  return (
    <div className="list-todo">
      {arrTodo.map((item, index) => (
        <ItemTodo todoItem={item} />
      ))}
    </div>
  );
};

export default ListTodo;
