import React, { useState } from "react";
import "./itemTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
const ItemTodo = ({ todoItem }) => {
  return (
    <>
      {todoItem.change === false ? (
        <div className="item-todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <span className="content-todo">{todoItem.title}</span>
          </div>
          <div className="right">
            <FontAwesomeIcon className="icon-pen" icon={faPen} />
            <FontAwesomeIcon className="icon-trasch" icon={faTrashCan} />
          </div>
        </div>
      ) : (
        <div className="change-todo">
          <span>Edit: </span>
          <input className="input-change" type="text" value={todoItem.title} />
          <span className="btn-save">Save</span>
        </div>
      )}
    </>
  );
};

export default ItemTodo;
