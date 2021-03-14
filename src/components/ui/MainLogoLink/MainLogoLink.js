import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../../svg/MainLogo';
import './MainLogoLink.css';

function MainLogoLink({ onClick }) {
  return (
    <Link
      to="/"
      className="main-logo-link"
      onClick={onClick}
    >
      <MainLogo />
    </Link>
  );
}

export default MainLogoLink;
