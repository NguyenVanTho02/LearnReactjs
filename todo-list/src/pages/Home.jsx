import React from "react";
import "./home.css";
import InputTodo from "../components/InputTodo";
import ListTodo from "../components/ListTodo";
import { useState } from "react";

const arrTodo = [
  {
    title: "Quét sân",
    completed: false,
  },
  {
    title: "Rửa bát",
    completed: false,
  },
  {
    title: "Nấu cơm",
    completed: false,
  },
];
const Home = () => {
  const [listTodo, setListTodo] = useState(arrTodo);
  const [todo, setTodo] = useState([
    {
      title: "",
      completed: false,
    },
  ]);

  const handleInput = (e) => {
    if (e.keyCode === 13) {
      setListTodo([...listTodo, todo]);
      e.target.value = "";
    }
  };

  const handleDelete = (id) => {
    const arrNew = [...listTodo];
    arrNew.splice(id, 1);
    setListTodo(arrNew);
  };

  const handleCompleted = (id) => {
    const arrNew = [...listTodo];
    arrNew.length > 0 &&
      arrNew.map((item, index) => {
        if (index === id) {
          return (item.completed = !item.completed);
        }
        return item;
      });
    setListTodo(arrNew);
  };

  return (
    <div className="main__todo">
      <h1>todos</h1>
      <InputTodo handleInput={handleInput} todo={todo} setTodo={setTodo} />
      <ListTodo
        listTodo={listTodo}
        handleDelete={handleDelete}
        handleCompleted={handleCompleted}
      />
    </div>
  );
};

export default Home;
