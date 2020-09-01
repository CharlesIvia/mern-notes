import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const myData = async () => {
      let res = await fetch("http://localhost:4000");
      let jsonFormat = await res.json();
      setItems(jsonFormat);
    };

    myData();
  }, []);
  return (
    <div className="container">
      <div className="mt-3">
        <h3>Todo List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((todo) => (
              <tr key={todo._id}>
                <td>{todo.text}</td>
                <td>
                  <Link to={`/edit/${todo.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
