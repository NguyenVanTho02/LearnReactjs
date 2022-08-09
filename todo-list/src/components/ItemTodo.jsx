import React from "react";
import "./itemTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircle,
  faFloppyDisk,
} from "@fortawesome/free-regular-svg-icons";
import { faCircleMinus, faPen } from "@fortawesome/free-solid-svg-icons";

const ItemTodo = ({
  title,
  index,
  change,
  handleDelete,
  handleCompleted,
  handleChange,
  activeChange,
  saveChangeTodo,
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
        <input
          readOnly={!change}
          type="text"
          value={title}
          className={`content-todo ${completed ? "line-through" : ""}`}
          onChange={(e) => handleChange(e, index)}
          onKeyUp={(e) => saveChangeTodo(e, index)}
        />
      </div>
      <div className="btn-delete">
        <FontAwesomeIcon
          className="icon-delete"
          icon={faCircleMinus}
          onClick={() => handleDelete(index)}
        />

        <span className="icon-change" onClick={() => activeChange(index)}>
          {change ? (
            <FontAwesomeIcon icon={faFloppyDisk} />
          ) : (
            <FontAwesomeIcon icon={faPen} />
          )}
        </span>
      </div>
    </div>
  );
};

export default ItemTodo;
