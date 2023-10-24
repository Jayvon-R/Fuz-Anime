import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddRatingForm from "./AddRatingForm";
import { scrapeReviewsForAnime } from "./webScraper";

export default function AnimeInfo() {
  const { id } = useParams();
  const [animeData, setAnimeData] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [userRating, setUserRating] = useState();
  const [reviews, setReviews] = useState([]);

useEffect(() => {
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

  const scrapeAnimeReviews = async () => {
    const reviewsData = await scrapeReviewsForAnime(animeData.title, 5);
    setReviews(reviewsData);
  };

  const fetchAnimeData = async () => {
    try {
      const response = await axios.get(
        `https://api.consumet.org/anime/gogoanime/info/${id}`
      );
      setAnimeData(response.data);
      fetchData();
      scrapeAnimeReviews();
    } catch (error) {
      console.error(error);
    }
  };

  fetchAnimeData();
}, [id, animeData.title]);


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

          <ul className="reviews-list">
            {reviews.map((review, index) => (
              <li key={index}>
                <h4>Review {index + 1}</h4>
                <p>Reviewer: {review.reviewer}</p>
                <p>Score: {review.score}</p>
                <p>Content: {review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
