import React, { useEffect } from "react";
import axios from "axios";

const VideoServer = ({ episodeId, serverName }) => {
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.consumet.org/anime/gogoanime/servers/${episodeId}?server=${serverName}`;
      try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error("Error fetching server data:", error);
      }
    };
    fetchData();
  }, [episodeId, serverName]);

  return <div>Fetching server data...</div>;
};

export default VideoServer;
