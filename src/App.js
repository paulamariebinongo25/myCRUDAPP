import React, { useState, Fragment, useEffect } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import ListOfTodoTable from "./components/tables/ListOfTodoTable";
import AddTodoForm from "./components/forms/AddTodoForm";
import EditTodoForm from "./components/forms/EditTodoForm";

const App = () => {
  const initialTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const initialFormState = { id: null, name: "" };

  const [currentTodo, setCurrentTodo] = useState(initialFormState);

  const [editing, setEditing] = useState(false);

  const editRow = todo => {
    setEditing(true);

    setCurrentTodo({ id: todo.id, name: todo.name });
  };

  const addTodo = todo => {
    todo.id = todos.length + 1;
    setTodos([...todos, todo]);
  };

  const deleteTodo = id => {
    setEditing(false);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setEditing(false);

    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
  };
  return (
    <div className="container">
      <div className="box">
        {editing ? (
          <Fragment>
            <EditTodoForm
              editing={editing}
              setEditing={setEditing}
              currentTodo={currentTodo}
              updateTodo={updateTodo}
            />
          </Fragment>
        ) : (
          <Fragment>
            <div className="column">
              <div className="columns is-mobile is-centered">
                <AddTodoForm addTodo={addTodo} />
              </div>
            </div>
          </Fragment>
        )}
        <div className="column">
          <div className="box2 box">
            <div className="title is-4 has-text-centered">View Todos</div>
            <div className="columns is-mobile is-centered">
              <ListOfTodoTable
                todos={todos}
                deleteTodo={deleteTodo}
                editRow={editRow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
