import React from "react"
import { useState } from "react"
import axios from "axios"

export default function NavBar(){
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async () => {
        const searchUrl = `https://api.consumet.org/anime/gogoanime/${searchQuery}?page=1`;

        try {
            const response = await axios.get(searchUrl);
            if (response.status === 200) {
                const data = response.data;
                setSearchResults(data.results);
            } else {
                console.error('Search API failed')
            }
        } catch (error) {
            console.error(error);
        }
    }
    

    return(
        <div className="navbar">
            <h1>Top Airing</h1>

            <input 
            type="text" 
            placeholder="Search anime..." 
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button 
            type="submit" 
            className="search-button"
            onClick={handleSearch}
            >Go
            </button>

            <div className="search-results">
                {searchResults.map((anime) => (
                    <a href={anime.url}>
                        <img src={anime.image} className="search-image"/>
                    </a>
                ))}
            </div>

        </div>
    )
}