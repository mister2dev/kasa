import React from "react";
import Error404 from "../assets/404.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error404">
        <img src={Error404} alt="erreur 404" />
      </div>
      <div className="error-and-link">
        <p className="error-message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="home-link" to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
};

export default Error;
