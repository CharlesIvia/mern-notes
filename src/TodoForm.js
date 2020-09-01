import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const TodoForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });

  const history = useHistory();

  const onSubmitHandler = handleSubmit((data) => {
    onSubmit(data);
    history.push("/");
  });
  return (
    <div>
      {" "}
      <form onSubmit={onSubmitHandler}>
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
            Save Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
