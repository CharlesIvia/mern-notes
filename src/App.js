import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";
import CreateTodo from "./CreateTodo";

function App() {
  return (
    <div>
      <nav className="navbar bg-ligt navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Todos
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="create">
              Create Todo
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/edit:id" component={EditTodo} />
        <Route exact path="/create" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
