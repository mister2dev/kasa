import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo de l'application" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li className="accueil">
            <NavLink to="/" exact="true" >
              Accueil
            </NavLink>
          </li>
          <li className="apropos">
            <NavLink to="/about">
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
