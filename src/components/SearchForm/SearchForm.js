import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__search-input-wrapper">
        <input
          className="search-form__text-input"
          type="text"
          placeholder="Фильм"
        />
        <button className="search-form__button" type="submit">Найти</button>
      </div>
      <div className="search-form__shorts-wrapper">
        <p className="search-form__shorts-title">Короткометражки</p>
        <div className="search-form__shorts-switcher-wrapper">
          <input
            className="search-form__shorts-switcher"
            type="checkbox"
          />
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
