import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo.svg"

const Header = () => {
  return (
    <div>
        <div className="header-container">
          <div className="logo">
            <NavLink to="/">
            <div className="logo">
              <img src={Logo} alt='logo'/>
            </div>
            </NavLink>
          </div>
          <nav>
            <ul>
              <li className="accueil">
              <NavLink to="/">Accueil
              </NavLink>
              </li>
              <li className="apropos">
                <NavLink to="about">
                  A Propos
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  );
};

export default Header;