import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoServer from "./VideoServer";

const VideoPage = () => {
  const { episodeId } = useParams();
  const [videoLinks, setVideoLinks] = useState([]);
  const [selectedServer, setSelectedServer] = useState("");

  useEffect(() => {
    const fetchVideoLinks = async () => {
      try {
        const url = `https://api.consumet.org/anime/gogoanime/watch/${episodeId}`;
        const response = await axios.get(url);
        const data = response.data;

        console.log("Streaming links data:", data);

        if (data.sources && Object.keys(data.sources).length > 0) {
          setVideoLinks(Object.values(data.sources));
          setSelectedServer(Object.values(data.sources)[0].url);
          console.error();
        }
      } catch (error) {
        console.error("Error fetching streaming links:", error);
      }
    };

    fetchVideoLinks();
  }, [episodeId]);

  const handleServerChange = (event) => {
    setSelectedServer(event.target.value)
  }

  return (
    <div>
      <select value={selectedServer} onChange={handleServerChange}>
        {videoLinks.map((link, index) => (
          <option key={index} value={link.url}>
            {link.name} - {link.url}
          </option>
        ))}
      </select>
      <iframe
        title="embedded-video"
        src="https://awish.pro/e/lb5gjeb377qk"
        allowFullScreen={true}
        allow="autoplay *; fullscreen *; encrypted-media *;"
        className="video"
      ></iframe>
      <VideoServer episodeId={episodeId} />
    </div>
  );
};

export default VideoPage;
