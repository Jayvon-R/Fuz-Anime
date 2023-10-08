import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddRatingForm from "./AddRatingForm";

export default function AnimeInfo() {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [userRating, setUserRating] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/animeRatings?animeId=${id}`
      );
      setRatings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(
          `https://api.consumet.org/anime/gogoanime/info/${id}`
        );
        setAnimeData(response.data);
        fetchData();
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
            <AddRatingForm
              animeData={animeData}
              userRating={userRating}
              setUserRating={setUserRating}
            />
            <p className="user-rating">Your Rating: {userRating}</p>
          </div>

          <ul>
            {ratings.map((rating) => (
              <li key={rating.id}>Rating: {rating.rating}</li>
            ))}
          </ul>

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
