import React from "react";
import AnimeInfo from "./AnimeInfo";

const VideoPage = ({ episodeUrl, animeData }) => {
  return (
    <div>
      <video width={750} height={400} controls>
        <source src={episodeUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPage;
