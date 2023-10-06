import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

export default function TopAiringData() {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    fetch("https://api.consumet.org/anime/gogoanime/top-airing")
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
    <div>
      <h1 className="top-airing">Top Airing</h1>
      <div className="anime-card-container">
        {animeData.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
