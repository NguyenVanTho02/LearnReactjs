import React from "react";
import "./itemTodo.css";
import { faCircleCheck, faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemTodo = ({
  title,
  index,
  handleDelete,
  handleCompleted,
  completed,
}) => {
  return (
    <div className="item-todo">
      <div className="check-title">
        <div
          className="box__icon-change"
          onClick={() => handleCompleted(index)}
        >
          {!completed ? (
            <FontAwesomeIcon className="icon-completed" icon={faCircle} />
          ) : (
            <FontAwesomeIcon className="icon-completed" icon={faCircleCheck} />
          )}
        </div>
        <p className={`content-todo ${completed ? "line-through" : ""}`}>
          {title}
        </p>
      </div>
      <div className="btn-delete">
        <FontAwesomeIcon
          className="icon-delete"
          icon={faCircleMinus}
          onClick={() => handleDelete(index)}
        />
      </div>
    </div>
  );
};

export default ItemTodo;
