import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMoreBtn from '../ui/LoadMoreBtn/LoadMoreBtn';
import './MoviesCardList.css';

function MoviesCardList({ moviesData, isRenderInSaved, enableLoadMoreBtn }) {
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
      {enableLoadMoreBtn ? <LoadMoreBtn /> : null}
    </section>
  );
}

export default MoviesCardList;
