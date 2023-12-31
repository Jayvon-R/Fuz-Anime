import React from "react";
import TopAiringData from "./TopAiringData";
import RecentData from "./RecentData";
import NavBar from "./NavBar";
import Popular from "./Popular";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnimeInfo from "./AnimeInfo";
import VideoPage from "./VideoPage";

function Home() {
  return (
    <div>
      <TopAiringData />
      <RecentData />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/popular" component={Popular} />
          <Route path="/anime/:id" component={AnimeInfo} />
          <Route path="/video/:episodeId" component={VideoPage} />
        </Switch>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
