import React, { useState, useEffect } from "react";

const EditTodoForm = props => {
  const [todo, setTodo] = useState(props.currentTodo);

  useEffect(() => {
    setTodo(props.currentTodo);
  }, [props]);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.updateTodo(todo.id, todo);
  };

  return (
    <form
      className="square columns is-mobile is-centered"
      onSubmit={handleSubmit}
    >
      <div className="box">
        <div className="title is-4 has-text-centered">Edit todo</div>
        <div className="level">
          <div className="level-item has-centered">
            <div className="field">
              <label>Name</label>
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
          </div>
        </div>

        {/* <div className="level">
          <div className="level-item has-centered">
            <div className="field">
              <label>todoname</label>
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
                <div className="buttons">
                  <button className="button is-rounded is-black">
                    Edit Todo
                  </button>
                  <button
                    onClick={() => props.setEditing(false)}
                    className="button is-rounded is-outlined "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditTodoForm;
