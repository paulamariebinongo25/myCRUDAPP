import React from "react";

const ListOfTodoTable = props => (
  <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th className="title is-6 has-text-centered">Name</th>

        <th className="title is-6 has-text-centered">Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.todos.length > 0 ? (
        props.todos.map(todo => (
          <tr key={todo.id}>
            <td className="subtitle is-6 has-text-centered">{todo.name}</td>

            <td className="level">
              <div className="level-item has-text-centered">
                <div className="buttons">
                  <button
                    onClick={() => {
                      props.editRow(todo);
                    }}
                    className="button is-link is-hovered is-focused is-active"
                  >
                    <span className="icon is-left">
                      <i className="fas fa-pen"></i>
                    </span>
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => props.deleteTodo(todo.id)}
                    className="button is-danger is-hovered is-focused is-active"
                  >
                    <span className="icon is-left">
                      <i className="fas fa-trash"></i>
                    </span>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={1}>
            <div className="subtitle is-5  has-text-centered">No Todos</div>
          </td>
          <td className="level">
            <div className="level-item has-text-centered">
              <div className="buttons">
                <button
                  className="button is-link is-hovered is-focused is-active"
                  disabled
                >
                  <span class="icon is-left">
                    <i class="fas fa-pen"></i>
                  </span>
                  <span>Edit</span>
                </button>
                <button
                  className="button is-danger is-hovered is-focused is-active"
                  disabled
                >
                  <span class="icon is-left">
                    <i class="fas fa-trash"></i>
                  </span>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ListOfTodoTable;
