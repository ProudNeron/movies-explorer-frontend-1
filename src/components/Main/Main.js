import React from 'react';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <section className="main__header">
        <h1 className="main__title">Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab />
      </section>
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  );
}

export default Main;
