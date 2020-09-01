import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";

const EditTodo = () => {
  const [todo, setTodo] = useState();

  useEffect(() => {
    setTodo({
      text: "foo",
    });
  }, []);

  return todo ? <TodoForm /> : <div>Loading</div>;
};

export default EditTodo;
