import React, { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ cardData }) {
  const [isAdded, setIsAdded] = useState(false);

  const tempHandleClick = () => setIsAdded(!isAdded);

  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <h4 className="movie-card__title">{cardData.title}</h4>
        <p className="movie-card__duration">{cardData.duration}</p>
        <button
          className={!isAdded
            ? 'movie-card__bookmark-btn'
            : 'movie-card__bookmark-btn movie-card__bookmark-btn_is-added'}
          type="button"
          onClick={tempHandleClick}
        />
      </div>
      <img className="movie-card__image" src={cardData.img} alt={`Фотография к фильму ${cardData.title}`} />
    </div>
  );
}

export default MoviesCard;
