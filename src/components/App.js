import React from "react";
import Data from "./TopAiringData"
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/"  />
        <Route path="/:id" />
      </Switch>
      <NavBar />
      <Data />
    </div>
  );
}

export default App;
