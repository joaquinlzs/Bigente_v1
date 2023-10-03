import React, { useState } from 'react';
import './CSS/Card2.css';
import Tag from './Tag';
import tiempoPasadoHastaHoy from '../functions/dateUnix';
import getCardSize from '../functions/cardSize';

function Card({ title, subreddit, selftext, score, thumbnail, permalink, tags, created }) {
    const [flipped, setFlipped] = useState(false);
    const hasSelftext = selftext && selftext.trim().length > 0;

    const flipCard = () => {
        if (hasSelftext) {
        setFlipped(!flipped);
        }
    };



    return (
    <div 
        className={`card ${flipped ? 'flipped' : ''} ${getCardSize(score)}`} 
        onClick={flipCard}
    >
        <div className="card-inner">

            <div className={`card-front ${flipped ? 'hidden' : ''}`}>
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
                        </a>&nbsp;
                        [{score}]
                    </h5>
                    </div>
                <div className="label">
                    {tags.map(tag => (
                        <Tag text={tag} color={"gray"}/>
                    ))}
                </div>
                <div className="footer">
                    <div className="date">
                        <i class="fa-regular fa-calendar"></i>&nbsp;
                        {tiempoPasadoHastaHoy(created)}
                    </div>
                    {hasSelftext && (
                    <div className="flipButton">
                        <i class="fa-solid fa-repeat"></i>
                    </div>
                    )}
                </div>
            </div>

            <div className={`card-back ${flipped ? '' : 'hidden'}`}>
                <div className="text">
                    {selftext} 
                </div>
            </div>

        </div>
    </div>

    );
}

export default Card;