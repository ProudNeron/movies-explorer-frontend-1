import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MainLogo from '../svg/MainLogo';
import Navigation from '../Navigation/Navigation';
import SignInBtn from '../ui/SignInBtn/SignInBtn';
import ProfileBtn from '../ui/ProfileBtn/ProfileBtn';
import BurgerMenuBtn from '../ui/BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.css';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const isMobile = width <= 768;

  const [isOpen, setIsOpen] = useState(false);
  const handleBurgerMenuClick = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <Link
        to="/"
        className="header__logo-link"
      >
        <MainLogo />
      </Link>

      <Route exact path={['/movies', '/saved-movies', '/profile']}>
        {isMobile ? (<BurgerMenuBtn handleClick={handleBurgerMenuClick} />) : null}
      </Route>

      {!isMobile ? (
        <div className="header__nav-wrapper">
          <Navigation />

          <Switch>
            <Route exact path="/">
              <SignInBtn />
            </Route>

            <Route exact path={['/movies', '/saved-movies', '/profile']}>
              <ProfileBtn />
            </Route>
          </Switch>
        </div>
      ) : (
        <Route exact path={['/movies', '/saved-movies', '/profile']}>
          <BurgerMenu isOpen={isOpen} closeHandler={handleBurgerMenuClick} />
        </Route>
      )}

    </header>
  );
}

export default Header;
