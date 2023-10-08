import React from "react";
import PopularAnimeCard from "./PopularAnimeCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Popular(){
    const [animeData, setAnimeData] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
          const totalPages = 10;
          const baseUrl = "https://api.consumet.org/anime/gogoanime/top-airing";
          const results = [];

          for (let page = 1; page <= totalPages; page++) {
              const response = await axios.get(baseUrl, { params: { page }});
              const data = response.data;
              results.push(...data.results);
          }
          setAnimeData(results);
        };
    
        fetchData();
      }, []);
    
    return (
        <div>
            <h1>Popular Anime</h1>
            <div className="popular-anime-card-container">
                {animeData.map((anime) => (
                    <PopularAnimeCard key={anime.id} anime={anime} />
                ))}
            </div>
        </div>
    )
}

