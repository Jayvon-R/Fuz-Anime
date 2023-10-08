import React, { useState } from "react";
import TopAiringData from "./TopAiringData"
import RecentData from "./RecentData"
import NavBar from "./NavBar";
import Popular from "./Popular";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import AnimeInfo from "./AnimeInfo";
import AddAnimeRating from "./AddAnimeRating";

function Home(){
  return(
    <div>
      <TopAiringData />
      <RecentData />
    </div>
  )
}

function App() {
  const [animeRatings, setAnimeRatings] = useState([]);

  const addAnimeRating = (newRating) => {
    setAnimeRatings([...animeRatings, newRating]);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/popular" component={Popular} />
          <Route path="/anime/:id" component={AnimeInfo} />
          <AddAnimeRating addAnimeRating={addAnimeRating} />
        </Switch>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
