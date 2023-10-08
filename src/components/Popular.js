import React from "react";
import PopularAnimeCard from "./PopularAnimeCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Popular(){
    const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const totalPages = 5;
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
                    <Link to={`/anime/${anime.id}`} className="popular-anime-link">
                    <PopularAnimeCard key={anime.id} anime={anime} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

