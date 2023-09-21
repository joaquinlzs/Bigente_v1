import React from 'react';
import './CSS/Card2.css';
import Tag from './Tag';

// Importa las clases de FontAwesome para icono del enlace

function Card({ title, subreddit, selftext, score, thumbnail, permalink }) {

    return (
    <div className="card">
        <div className="title">
            <h2>
                {title}
            </h2>
        </div>
        <div className="author">
            <h5>
                by {subreddit[0].toUpperCase() + subreddit.slice(1)}&nbsp;
                <a href={`https://www.reddit.com${permalink}`}>
                    <i class="fa-solid fa-up-right-from-square"></i>
                </a>
            </h5>
            </div>
        <div className="label">
            <Tag text={"Litio"} color={"purple"}/>
            <Tag text={"PV"} color={"gold"}/>
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