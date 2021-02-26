import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

// Массив временных карточек для сдачи этапа верстки
import { cardList } from '../../data/tempCards';

function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {cardList.map((cardData) => (
          <li className="movies-card-list__item" key={cardData.id}>
            <MoviesCard
              key={cardData.id}
              cardData={cardData}
            />
          </li>
        ))}
      </ul>
      <div className="movies-card-list__more-btn-wrapper">
        <button className="movies-card-list__more-btn" type="button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
