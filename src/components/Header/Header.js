import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import SignInBtn from '../ui/SignInBtn/SignInBtn';
import ProfileBtn from '../ui/ProfileBtn/ProfileBtn';
import BurgerMenuBtn from '../ui/BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.css';
import MainLogoLink from '../ui/MainLogoLink/MainLogoLink';

// на 3м этапе сделать рефакторинг с условным рендером,
// прим: {!isLoggedIn ? <SignInBtn /> : <ProfileBtn />}

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

      <MainLogoLink />

      <Route path={['/movies', '/saved-movies', '/profile']}>
        {isMobile ? (<BurgerMenuBtn handleClick={handleBurgerMenuClick} />) : null}
      </Route>

      <Switch>

        <Route exact path="/">
          <div className="header__nav-wrapper header__nav-wrapper_type_unauth">
            <Navigation />
            <SignInBtn />
          </div>
        </Route>

        {!isMobile ? (
          <Route path={['/movies', '/saved-movies', '/profile']}>
            <div className="header__nav-wrapper header__nav-wrapper_type_auth">
              <Navigation />
              <ProfileBtn />
            </div>
          </Route>
        ) : null}

        <Route exact path={['/movies', '/saved-movies', '/profile']}>
          <BurgerMenu isOpen={isOpen} closeHandler={handleBurgerMenuClick} />
        </Route>

      </Switch>
    </header>
  );
}

export default Header;
