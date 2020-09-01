import React from "react";
import TodoForm from "./TodoForm";

const CreateTodo = () => {
  const createTodo = async (todo) => {
    let res = await fetch("http://localhost:4000/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    let jsonFormat = await res.json();
    console.log(jsonFormat);
  };
  const onSubmit = (data) => {
    createTodo(data);
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Todo Item</h3>
        <TodoForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default CreateTodo;
