import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

// Массив временных карточек для сдачи этапа верстки
import { tempCards } from '../../data/tempCards';

function Movies() {
  // Блок функция для 2го этапа. Показывает прелоадер
  const [isLoading, setIsLoading] = useState(true);
  const showLoadingSample = () => {
    setIsLoading(false);
  };
  setTimeout(showLoadingSample, 1000);
  // end

  return (
    <div className="movies">
      <SearchForm />
      {isLoading
        ? <Preloader />
        : <MoviesCardList moviesData={tempCards} isRenderInSaved={false} enableLoadMoreBtn />}
    </div>
  );
}

export default Movies;
