import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

export default function RecentData() {
  const [animeData, setAnimeData] = useState([]);

  // Fetches several anime's recent episodes from the API
  useEffect(() => {
    fetch("https://api.consumet.org/anime/gogoanime/recent-episodes")
      .then((response) => response.json())
      .then((data) => {
        setAnimeData(data.results);
      });
  }, []);

  return (
    <div className="recent-episodes-container">
      <h1 className="recent-episodes">Recent Episodes</h1>
      <div className="anime-card-container">
        {animeData.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
