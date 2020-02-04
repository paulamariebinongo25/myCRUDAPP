import React, { useState } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import UserTable from "./components/tables/UserTable";
import AddUserForm from "./components/forms/AddUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "Qwerty", username: "qwerty" },
    { id: 2, name: "Asdfghjkl", username: "asdfghjkl" },
    { id: 3, name: "Zxcvbnm", username: "zxcvbnm" }
  ];

  const [users, setUsers] = useState(usersData);
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <div className="container is-centered">
      <div className="level">
        <div className="column">
          <div className="box">
            <div className="title is-4 has-text-centered">Add User</div>
            <div className="columns">
              <AddUserForm addUser={addUser} />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="title is-4 has-text-centered">View Users</div>
            <div className="columns">
              <UserTable users={users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
