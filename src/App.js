import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";

import UserTable from "./components/tables/UserTable";

function App() {
  return (
    <div className="App">
      <UserTable />
    </div>
  );
}

export default App;
