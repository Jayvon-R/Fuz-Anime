import React, { useEffect, useState } from "react";

export default function Data() {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    fetch("https://api.consumet.org/anime/gogoanime/recent-episodes")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.results)) { 
          setAnimeData(data.results);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
    </div>
  );
}