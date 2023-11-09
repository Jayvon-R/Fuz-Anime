import React, { useEffect } from "react";
import axios from "axios";

export default function VideoLinks({ episodeId }) {
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.consumet.org/anime/gogoanime/watch/${episodeId}`;
      try {
        const response = await axios.get(url, { params: { server: "gogocdn" } });
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error("Error fetching streaming data:", error);
      }
    };
    fetchData();
  }, [episodeId]);

  return <div>Fetching episode link data...</div>;
}
