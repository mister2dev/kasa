import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error404">
        <p>404</p>
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
