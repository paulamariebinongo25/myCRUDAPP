import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";

import UserTable from "./components/tables/UserTable";

const App = () => {
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
              <UserTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
