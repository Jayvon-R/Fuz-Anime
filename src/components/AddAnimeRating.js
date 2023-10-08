import React, { useState } from "react";
import axios from "axios";

const AddAnimeRating = ({ addAnimeRating }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/animeRatings", { title, rating })
      .then((response) => {
        console.log("Anime rating added:", response.data);
        addAnimeRating(response.data);
        setTitle("");
        setRating("");
      })
      .catch((error) => {
        console.error("Error adding anime rating:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <button type="submit">Add Rating</button>
      </form>
    </div>
  );
};

export default AddAnimeRating;
