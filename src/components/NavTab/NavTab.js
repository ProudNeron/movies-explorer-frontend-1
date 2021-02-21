import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__list-item">
          <a href="#1" className="nav-tab__link">
            О проекте
          </a>
        </li>
        <li className="nav-tab__list-item">
          <a href="#2" className="nav-tab__link">
            Технологии
          </a>
        </li>
        <li className="nav-tab__list-item">
          <a href="#3" className="nav-tab__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
