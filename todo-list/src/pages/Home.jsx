import React from "react";
import "./home.css";
import InputTodo from "../components/InputTodo";
import ListTodo from "../components/ListTodo";
import { useState } from "react";
import { useEffect } from "react";

const getLocalStorage = () => {
  let getListTodo = localStorage.getItem("ListTodo");
  if (getListTodo) {
    return (getListTodo = JSON.parse(getListTodo));
  } else {
    return [];
  }
};

const Home = () => {
  const [listTodo, setListTodo] = useState(getLocalStorage);
  const [todo, setTodo] = useState([
    {
      title: "",
      completed: false,
      change: false,
    },
  ]);

  useEffect(() => {
    localStorage.setItem("ListTodo", JSON.stringify(listTodo));
  }, [listTodo]);

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

  const activeChange = (id) => {
    const arrNew = [...listTodo];
    arrNew.length > 0 &&
      arrNew.map((item, index) => {
        if (index === id) {
          return (item.change = !item.change);
        }
        return item;
      });
    setListTodo(arrNew);
  };

  const handleChange = (e, id) => {
    const arrNew = [...listTodo];
    arrNew.length > 0 &&
      arrNew.map((item, index) => {
        if (index === id) {
          item.title = e.target.value;
        }
        return item;
      });
    setListTodo(arrNew);
  };

  const saveChangeTodo = (e, id) => {
    const arrNew = [...listTodo];
    arrNew.length > 0 &&
      arrNew.map((item, index) => {
        if (index === id) {
          if (e.keyCode === 13) {
            item.change = !item.change;
          }
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
        handleChange={handleChange}
        activeChange={activeChange}
        saveChangeTodo={saveChangeTodo}
      />
    </div>
  );
};

export default Home;
