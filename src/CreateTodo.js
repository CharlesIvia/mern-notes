import React from "react";
import { useForm } from "react-hook-form";

const CreateTodo = () => {
  const { register, handleSubmit } = useForm();


  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Todo Item</h3>
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
              Create Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
