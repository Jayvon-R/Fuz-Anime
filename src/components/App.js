import React from "react";
import TopAiringData from "./TopAiringData"
import RecentData from "./RecentData"
import NavBar from "./NavBar";
import Popular from "./Popular";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";

function Home(){
  return(
    <div>
      <TopAiringData />
      <RecentData />
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/popular" component={Popular} />
        </Switch>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
