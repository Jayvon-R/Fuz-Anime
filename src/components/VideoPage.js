import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VideoPage = () => {
  const { episodeId } = useParams();
  const [videoLinks, setVideoLinks] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState("");

  useEffect(() => {
    const fetchVideoLinks = async () => {
      try {
        const url = `https://api.consumet.org/anime/gogoanime/watch/${episodeId}?server=gogocdn`;
        const response = await axios.get(url);
        const data = response.data;

        console.log("Streaming links data:", data);

        if (data.sources && Object.keys(data.sources).length > 0) {
          setVideoLinks(Object.values(data.sources));
          setSelectedQuality(Object.values(data.sources)[0].url);
          console.error("No streaming links available for this episode.");
        }
      } catch (error) {
        console.error("Error fetching streaming links:", error);
      }
    };

    fetchVideoLinks();
  }, [episodeId]);

  return (
    <div>
          <video width={750} height={400} controls>
            <source src={selectedQuality} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <p>Loading video links...</p>
    </div>
  );
};

export default VideoPage;
