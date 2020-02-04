import React, { useState, Fragment } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import UserTable from "./components/tables/UserTable";
import AddUserForm from "./components/forms/AddUserForm";
import EditUserForm from "./components/forms/EditUserForm";

const App = () => {
  const usersData = [];

  const [users, setUsers] = useState(usersData);

  const initialFormState = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const [editing, setEditing] = useState(false);

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };
  return (
    <div className="container is-centered">
      <div className="level">
        <div className="column">
          <div className="box">
            {editing ? (
              <Fragment>
                <div className="title is-4 has-text-centered">Edit User</div>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </Fragment>
            ) : (
              <Fragment>
                <div className="title is-4 has-text-centered">Add User</div>
                <div className="columns">
                  <AddUserForm addUser={addUser} />
                </div>
              </Fragment>
            )}
            <div className="column">
              <div className="box2 box">
                <div className="title is-4 has-text-centered">View Users</div>
                <div className="columns">
                  <UserTable
                    users={users}
                    deleteUser={deleteUser}
                    editRow={editRow}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
