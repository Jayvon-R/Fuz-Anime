import React from "react"
import { useState } from "react"

export default function NavBar(){
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        const url = 'https://api.consumet.org/anime/gogoanime/{query}?page={number}'
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
            >Go</button>
        </div>
    )
}