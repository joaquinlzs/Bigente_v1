import React from 'react';
import './Card.css';

function Card({ title, subreddit, selftext, score, thumbnail, permalink }) {
  return (
    <div className="card">
      <a href={`https://www.reddit.com${permalink}`}>{title}</a>
      <p>Subreddit: {subreddit}</p>
      <p>{selftext}</p>
      {thumbnail !== "self" ? <img src={thumbnail} alt="Imagen Reddit" /> : null}
      <p>Score: {score}</p>
      
    </div>
  );
}

export default Card;