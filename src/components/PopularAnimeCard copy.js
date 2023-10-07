import React from "react"

export default function PopularAnimeCard({ anime, className }) {
    return (
        <div className={`popular-anime-card ${className}`}>
        <a href={anime.url} className="popular-anime-card-anchor">
            <img src={anime.image} className="popular-anime-image" alt="anime-poster"/>
            <h4 className="popular-anime-image-text">{anime.title}</h4>
            </a>
        </div>
    )
}