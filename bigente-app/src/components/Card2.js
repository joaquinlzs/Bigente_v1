import React from 'react';
import './CSS/Card2.css';

// Importa las clases de FontAwesome para icono del enlace

function Card({ title, subreddit, selftext, score, thumbnail, permalink }) {

    return (
    <div className="card">
        <h2 className="title">
            {title}
        </h2>
        <h5 className="author">
            by {subreddit[0].toUpperCase() + subreddit.slice(1)}&nbsp;
            <a href={`https://www.reddit.com${permalink}`}>
                <i class="fa-solid fa-up-right-from-square"></i>
            </a>
        </h5>
        <div className="label">
            {score}
        </div>
        <div className="text">
            Texto 
        </div>
        <div classname="cardFooter">
            <div className="dateRelease">
            </div>
            <div className="flipButton">
            </div>

        </div>
    </div>
    

    );
}

export default Card;