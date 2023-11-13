import React, { useEffect, useState } from "react";
import axios from "axios";

const VideoServer = ({ episodeId, onServerChange }) => {
  const [filteredLinks, setFilteredLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.consumet.org/anime/gogoanime/servers/${episodeId}`;
        const response = await axios.get(url);
        const data = response.data;

        if (data.length > 0) {
          const targetServers = ["Filelions", "Mp4Upload", "Gogo server", "Vidsteaming"];
          const filteredData = data.filter((link) =>
            targetServers.includes(link.name)
          );
          setFilteredLinks(filteredData);
          if (filteredData.length > 0) {
            onServerChange(filteredData[0].url); // Passing the URL of the first filtered server
          }
        }
      } catch (error) {
        console.error("Error fetching server data:", error);
      }
    };

    fetchData();
  }, [episodeId, onServerChange]);

  return (
    <div>
      {filteredLinks.length > 0 ? (
        <select className="server-select" onChange={(e) => onServerChange(e.target.value)}>
          {filteredLinks.map((link, index) => (
            <option key={index} value={link.url}>
              {link.name}
            </option>
          ))}
        </select>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default VideoServer;
