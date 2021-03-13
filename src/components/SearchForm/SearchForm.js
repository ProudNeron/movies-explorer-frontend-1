import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import getAllMovies from '../../utils/MoviesApi';

function SearchForm() {
  // const testSearch = () => {
  //   getAllMovies()
  //     .then((movies) => {
  //       console.log(movies);
  //     });
  // };

  async function testSearch() {
    try {
      const MovieData = await getAllMovies();
      console.log(MovieData);
    } catch (e) {
      console.error(`DAMN!!!${e}`);
    }
  }
  return (
    <div className="search-form">
      <div className="search-form__search-input-wrapper">
        <input
          className="search-form__text-input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button className="search-form__button" type="submit" onClick={testSearch}>Найти</button>
      </div>
      <div className="search-form__shorts-wrapper">
        <p className="search-form__shorts-title">Короткометражки</p>
        <FilterCheckbox />
      </div>
    </div>
  );
}

export default SearchForm;
