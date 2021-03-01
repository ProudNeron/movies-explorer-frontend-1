import React from 'react';
import SubmitBtn from '../ui/SubmitBtn/SubmitBtn';
import './AuthForm.css';

function AuthForm() {
  return (
    <form className="auth-form">
      <label className="auth-form__label" htmlFor="name">
        Имя
        <input
          className="auth-form__input"
          id="name"
          required
          name="name"
          type="text"
          placeholder="Имя"
        />
        <span className="auth-form__error" />
      </label>

      <label className="auth-form__label" htmlFor="email">
        Почта
        <input
          className="auth-form__input"
          id="email"
          required
          name="email"
          type="email"
          placeholder="Почта"
        />
      </label>
      <span className="auth-form__error" />

      <label className="auth-form__label" htmlFor="password">
        Пароль
        <input
          className="auth-form__input auth-form__input_is-error"
          id="password"
          required
          name="password"
          type="password"
          defaultValue="****************"
          placeholder="Пароль"
        />
        <span className="auth-form__error auth-form__error_is-active">Что-то пошло не так...</span>
      </label>
      <div className="auth-form__submit-wrapper">
        <SubmitBtn label="Зарегистрироваться" />
      </div>
    </form>
  );
}

export default AuthForm;
