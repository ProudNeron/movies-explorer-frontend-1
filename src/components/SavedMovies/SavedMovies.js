import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Divider from '../ui/Divider/Divider';
import './SavedMovies.css';

import { tempSavedCards } from '../../data/tempCards';

function SavedMovies() {
  // Массив временных карточек для сдачи этапа верстки

  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList moviesData={tempSavedCards} isRenderInSaved />
      <Divider />
    </div>
  );
}

export default SavedMovies;
