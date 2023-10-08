import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AnimeInfo() {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.consumet.org/anime/gogoanime/info/${id}`)
        setAnimeData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {animeData ? (
        <div>
          <h1>{animeData.title}</h1>
          <p>{animeData.description}</p>
          <img src={animeData.image} alt={animeData.title} />
          <p>Genres: {animeData.genres.join(", ")}</p>
          <p>Release Date: {animeData.releaseDate}</p>
          <p>Total Episodes: {animeData.totalEpisodes}</p>
          <p>Sub or Dub: {animeData.subOrDub}</p>
          <p>Type: {animeData.type}</p>
          <h2>Episodes:</h2>
          <ul>
            {animeData.episodes.map((episode) => (
              <li key={episode.id}>
                Episode {episode.number}:{" "}
                <a href={episode.url} target="_blank" rel="noopener noreferrer">
                  Watch Now
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
      }