import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VideoServer from "./VideoServer";

const VideoPage = () => {
  const { episodeId } = useParams();
  const [selectedServer, setSelectedServer] = useState(""); // State to store the selected server URL

  return (
    <div className="video-container">
    
      <VideoServer
        episodeId={episodeId}
        onServerChange={setSelectedServer}
      />
      <iframe
        title="embedded-video"
        src={selectedServer}
        allowFullScreen={true}
        allow="autoplay *; fullscreen *; encrypted-media *;"
        className="video"
      ></iframe>
    </div>
  );
};

export default VideoPage;
