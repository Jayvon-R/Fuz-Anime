import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AnimeRatings(){
  const [animeRatings, setAnimeRatings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/animeRatings").then((response) => {
      setAnimeRatings(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Anime Ratings</h2>
      <ul>
        {animeRatings.map((animeRating) => (
          <li key={animeRating.id}>
            {animeRating.title} - Rating: {animeRating.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

