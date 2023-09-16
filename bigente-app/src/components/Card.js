import React, { useState } from 'react';
import './CSS/Card.css';

function Card({ title, subreddit, selftext, score, thumbnail, permalink }) {
  const [isSpoilerVisible, setSpoilerVisibility] = useState(false);
  const [isThumbnailVisible, setThumbnailVisibility] = useState(false);

  const toggleSpoiler = () => {
    setSpoilerVisibility(!isSpoilerVisible);
  };

  const toggleThumbnail = () => {
    setThumbnailVisibility(!isThumbnailVisible);
  };
  
  return (
    <div className="card">
      <a href={`https://www.reddit.com${permalink}`}>{title}</a>

      {selftext && (
        isSpoilerVisible ? (
          <div>
            <p>{selftext}</p>
            <button className="buttontext" onClick={toggleSpoiler}>
              <i className="fa-solid fa-comment-slash"></i>
            </button>
          </div>
        ) : (
          <div>
            <button className="buttontext" onClick={toggleSpoiler}>
              <i className="fa-solid fa-comment"></i>
            </button>
          </div>
        )
      )}

      {thumbnail !== "self" && (
        isThumbnailVisible ? (
          <div>
            <img src={thumbnail} alt="Imagen Reddit" />
            <button className="buttontext" onClick={toggleThumbnail}>
            <i className="fa-regular fa-eye-slash"></i>
            </button>
          </div>
        ) : (
          <div>
            <button className="buttontext" onClick={toggleThumbnail}>
              <i className="fa-regular fa-eye"></i>
            </button>
          </div>
        )
      )}
      
      <p>Score: {score}</p>
    </div>
  );
}

export default Card;