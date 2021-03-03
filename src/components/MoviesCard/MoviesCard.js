import React, { useState } from 'react';
import BookmarkBtn from '../ui/BookmarkBtn/BookmarkBtn';
import BookmarkRemoveBtn from '../ui/BookmarkRemoveBtn/BookmarkRemoveBtn';
import './MoviesCard.css';

function MoviesCard({ cardData, isRenderInSaved }) {
  /* блок кода для показа эффекта добавление в избранное
  потом надо в функции добавления в избранное через мое апи
  пробрасывать создание карточки в списке сохраненных только
  с кнопкой удалить из избранного.
  isRenderInSaved - если карточка добавлена в избранное, при рендере
  на странице сохраненных фильмов
  */
  const [isAdded, setIsAdded] = useState(false);
  const tempHandleClick = () => setIsAdded(!isAdded);
  // end

  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <div className="movie-card__meta-container">
          <h4 className="movie-card__title">{cardData.title}</h4>
          <p className="movie-card__duration">{cardData.duration}</p>
        </div>
        {isRenderInSaved
          ? <BookmarkRemoveBtn />
          : <BookmarkBtn isAdded={isAdded} onClick={tempHandleClick} />}
      </div>
      <img
        className="movie-card__image"
        src={cardData.img}
        alt={`Фотография к фильму ${cardData.title}`}
      />
    </div>
  );
}

export default MoviesCard;
