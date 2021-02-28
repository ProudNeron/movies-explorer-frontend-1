import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ moviesData, isRenderInSaved }) {
  // isRenderInSaved - поднятие стейта в родительский компонен, где будет рендерится
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {moviesData.map((movieData) => (
          <li className="movies-card-list__item" key={movieData.id}>
            <MoviesCard
              key={movieData.id}
              cardData={movieData}
              isRenderInSaved={isRenderInSaved}
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
