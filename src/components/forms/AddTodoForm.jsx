import React, { useState } from "react";

const AddTodoForm = props => {
  const initialFormState = { id: null, name: "" };
  const [todo, setTodo] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo.name) return;

    props.addTodo(todo);
    console.log(initialFormState);
  };

  return (
    <form
      class="square columns is-mobile is-desktop is-centered"
      onSubmit={handleSubmit}
    >
      <div class="box1 box">
        <div class="title is-4 has-text-centered">Add Todo</div>
        <div class="field">
          <label class="subtitle is-6 has-text-centered">Title Name</label>
          <div class="control">
            <input
              class="input is-black is-normal"
              type="text"
              name="name"
              value={todo.name}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* <div class="level">
          <div class="level-item has-centered">
            <div class="field">
              <div>todoname</div>
              <div class="control">
                <input
                  class="input is-black is-normal"
                  type="text"
                  name="todoname"
                  value={todo.todoname}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div> */}
        <div class="level">
          <div class="level-item has-centered">
            <div class="field">
              <div class="control">
                <button class="button is-rounded is-black is-fullwidth">
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
