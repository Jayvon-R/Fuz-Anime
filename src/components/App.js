import React from "react";
import TopAiringData from "./TopAiringData"
import RecentData from "./RecentData"
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
      <TopAiringData />
      <RecentData />
    </div>
  );
}

export default App;
