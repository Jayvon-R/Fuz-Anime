import React from "react"

export default function AnimeCard({ anime }) {
    return (
        <div className="anime-card">
            <a href={anime.url}>
            <img src={anime.image} className="anime-image"/>
            </a>
        </div>
    )
}