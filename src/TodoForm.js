import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const TodoForm = ({ todo }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });

  const history = useHistory();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    history.push("/");
  });
  return (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Todo Item</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              ref={register}
              className="form-control"
              type="text"
              name="text"
              id="text"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Edit Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
