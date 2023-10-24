import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { scrapeReviewsForAnime } from "./webScraper";

export default function AnimeInfo() {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    // const scrapeAnimeReviews = async () => {
    //   const reviewsData = await scrapeReviewsForAnime(animeData.title, 5);
    //   setReviews(reviewsData);
    // };

    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(
          `https://api.consumet.org/anime/gogoanime/info/${id}`
        );
        setAnimeData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimeData();
  }, [id]);

  return (
    <div>
      {animeData && (
        <div className="info-container">
          <img
            src={animeData.image}
            alt={animeData.title}
            className="info-card"
          />
          <div className="info-details">
            <h3>{animeData.title}</h3>
            <p className="description">{animeData.description}</p>
            <p className="genres">Genres: {animeData.genres.join(", ")}</p>
            <p className="release-date">
              Release Date: {animeData.releaseDate}
            </p>
            <p className="total-episodes">
              Total Episodes: {animeData.totalEpisodes}
            </p>
            <p className="sub-or-dub">Sub or Dub: {animeData.subOrDub}</p>
            <p className="type">Type: {animeData.type}</p>
          </div>

          <ul className="episode-list">
            {animeData.episodes.map((episode) => (
              <li key={episode.id}>
                <a href={episode.url} target="" className="episode-link">
                  EP {episode.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
