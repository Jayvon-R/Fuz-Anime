import React from "react";
import AnimeCard from "./AnimeCard";
import { useEffect, useState } from "react";

export default function Popular(){
    const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
        fetch("https://api.consumet.org/anime/gogoanime/top-airing")
          .then((response) => response.json())
          .then((data) => {
           setAnimeData(data.results);
          })
          .catch((error) => console.error(error));
      }, []);
      
    return (
        <div>
            <h1>Popular Anime</h1>
            <div className="popular-anime-card-container">
                {animeData.map((anime) => (
                    <AnimeCard key={anime.id} anime={anime} />
                ))}
            </div>
        </div>
    )
}