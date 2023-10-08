import React from "react"  
import { Link } from "react-router-dom"

export default function AnimeCard({ anime }) {
    return (
        <div className="anime-card">
            <Link to={`/anime/${anime.id}`}
            className="anime-card-anchor">
            <img src={anime.image} className="anime-image" alt="anime-poster"/>
            <h4 className="anime-image-text">{anime.title}</h4>
            </Link>
        </div>
    )
}