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
          <div className="info-container">
        <img src={animeData.image} alt={animeData.title} className="info-card" />
        <h2 className="info-title">{animeData.title}</h2>
        <div className="info-details">
            <p className="description">{animeData.description}</p>
            <p className="genres">Genres: {animeData.genres.join(", ")}</p>
            <p className="release-date">Release Date: {animeData.releaseDate}</p>
            <p className="total-episodes">Total Episodes: {animeData.totalEpisodes}</p>
            <p className="sub-or-dub">Sub or Dub: {animeData.subOrDub}</p>
            <p className="type">Type: {animeData.type}</p>
      </div>

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