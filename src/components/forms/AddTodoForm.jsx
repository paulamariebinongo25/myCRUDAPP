import React, { useState } from "react";

const AddTodoForm = props => {
  const initialFormState = { id: new Date().getTime(), name: "" };
  const [todo, setTodo] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setTodo({ ...todo, [name]: value });
  };

  const clearTodoItem = () => {
    setTodo({ name: "" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo.name) return;

    props.addTodo(todo);
    clearTodoItem();
  };

  return (
    <form
      className="square columns is-mobile is-desktop is-centered"
      onSubmit={handleSubmit}
    >
      <div className="box1 box">
        <div className="title is-4 has-text-centered">Add Todo</div>
        <div className="field">
          <label className="subtitle is-6 has-text-centered">Title Name</label>
          <div className="control">
            <input
              className="input is-black is-normal"
              type="text"
              name="name"
              value={todo.name}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* <div className="level">
          <div className="level-item has-centered">
            <div className="field">
              <div>todoname</div>
              <div className="control">
                <input
                  className="input is-black is-normal"
                  type="text"
                  name="todoname"
                  value={todo.todoname}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="level">
          <div className="level-item has-centered">
            <div className="field">
              <div className="control">
                <button className="button is-rounded is-black is-fullwidth">
                  Add New Todo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
