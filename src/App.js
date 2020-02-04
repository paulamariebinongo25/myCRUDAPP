import React, { useState } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import UserTable from "./components/tables/UserTable";

const App = () => {
  const usersData = [
    { id: 1, name: "Qwerty", username: "qwerty" },
    { id: 2, name: "Asdfghjkl", username: "asdfghjkl" },
    { id: 3, name: "Zxcvbnm", username: "zxcvbnm" }
  ];

  const [users, setUsers] = useState(usersData);

  return (
    <div className="container is-centered">
      <div className="level">
        <div className="column">
          <div className="box">
            <span className="title is-4">Add User</span>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="title is-4">View Users</div>
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
