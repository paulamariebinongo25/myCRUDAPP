import React from "react";

const UserTable = () => (
  <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name data</td>
        <td>Username data</td>
        <td className="level">
          <div className="buttons">
            <button className="button is-link is-hovered is-focused is-active">
              Edit
            </button>
            <button className="button is-danger is-hovered is-focused is-active">
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
);

export default UserTable;
