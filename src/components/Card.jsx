import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, cover, title }) => {
  return (
    <div className="fiche-logement">
      <Link to={`/logement/${id}`}>
        <div className="card-image">
          <img src={cover} alt={title} />
        </div>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default Card;
