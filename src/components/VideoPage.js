import React from "react";
import { useParams } from "react-router-dom";
import VideoServer from "./VideoServer";

const VideoPage = () => {
  const { episodeId } = useParams();
  return (
    <div>
      <video width={750} height={400} controls>
        <source src={episodeId} type="video/mp4" />
        <VideoServer episodeId={episodeId}/>
      </video>
    </div>
  );
};

export default VideoPage;
