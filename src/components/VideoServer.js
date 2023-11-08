import React, { useEffect } from "react";
import axios from "axios";

export default function VideoServer({ episodeId }) {
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.consumet.org/anime/gogoanime/servers/${episodeId}`;
      try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error("Error fetching server data:", error);
      }
    };
    fetchData();
  }, [episodeId]);

  return <div>Fetching server data...</div>;
}
