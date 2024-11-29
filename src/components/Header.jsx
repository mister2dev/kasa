import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo de l'application" />
        </Link>
      </div>
      <nav>
        <ul>
          <li className="accueil">
            <Link to="/" exact="true">
              Accueil
            </Link>
          </li>
          <li className="apropos">
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
