import React, { useState } from "react";
import AddTodo from "../components/AddTodo";
import ItemTodo from "../components/ItemTodo";
import ListTodo from "../components/ListTodo";
import "./home.css";

const arrTodo = [
  {
    title: "Việc làm 1",
    completed: false,
    change: false,
  },

  {
    title: "Việc làm 2",
    completed: false,
    change: false,
  },

  {
    title: "Việc làm 3",
    completed: false,
    change: false,
  },
];

const Home = () => {
  const [todo, setTodo] = useState({
    title: "",
    completed: false,
    change: false,
  });
  const [listTodo, setListTodo] = useState(arrTodo);

  const handleAddTodo = () => {
    setListTodo([...listTodo, todo]);
  };

  const handleDeleteTodo = () => {};

  return (
    <div className="main-todo">
      <AddTodo todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <div className="list-item">
        <ListTodo arrTodo={listTodo} handleDeleteTodo={handleDeleteTodo} />
      </div>
    </div>
  );
};

export default Home;
