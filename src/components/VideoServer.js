import React from "react";
import { useEffect } from "react";
import axios from "axios";

export default function VideoServer() {
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.consumet.org/anime/gogoanime/servers/{episodeId}";
            const response = await axios.get(baseUrl);
            const data = response.data;
            console.log(data);
        };
        fetchData();
    }, []);

}