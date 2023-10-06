import React from "react"

export default function AnimeCard({ anime }) {
    return (
        <div className="anime-card">
            <a href={anime.url} className="anime-card-anchor">
            <img src={anime.image} className="anime-image"/>
            <h4 className="anime-image-text">{anime.title}</h4>
            </a>
        </div>
    )
}