import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css';
import MainLogo from '../svg/MainLogo';
import Navigation from '../Navigation/Navigation';
import SignInBtn from '../ui/SignInBtn/SignInBtn';
import ProfileBtn from '../ui/ProfileBtn/ProfileBtn';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  return (
    <header className="header">
      <Link
        to="/"
        className="header__logo-link"
      >
        <MainLogo />
      </Link>

      {width <= 768 ? (<h3>BURGER</h3>) : (
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
      )}

    </header>
  );
}

export default Header;
