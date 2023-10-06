import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

export default function RecentData() {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    fetch("https://api.consumet.org/anime/gogoanime/recent-episodes")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.results)) { 
          setAnimeData(data.results);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => console.error(error));
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
