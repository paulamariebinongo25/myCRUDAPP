import React from "react";

const UserTable = props => (
  <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td className="level">
              <div className="buttons">
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="button is-link is-hovered is-focused is-active"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  className="button is-danger is-hovered is-focused is-active"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>
            <div className="subtitle is-5  has-text-centered">No users</div>
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
