import React from "react"

export default function AnimeCard({ anime }) {
    return (
        <div className="anime-card">
            <img src={anime.image} className="anime-image"/>
            <h4>{anime.title}</h4>
        </div>
    )
}