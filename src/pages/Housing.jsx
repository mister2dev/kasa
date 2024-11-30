import React from "react";
import Datas from "../data/logements.json";
import { useParams, Navigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";

const Housing = () => {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL
  const housing = Datas.find((data) => data.id === id); // Trouver le logement correspondant
  const stars = [1, 2, 3, 4, 5];

  if (!housing) {
    return <Navigate to="/404" />;
  }

  const equipement = housing.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <div className="property-page">
      <Carrousel pictures={housing.pictures} />

      <div className="top-bloc">
        {/* Bloc titre, localisation et tags */}
        <div className="details-div">
          <h1>{housing.title}</h1>
          <h4>{housing.location} </h4>
          <div className="tags-div">
            {housing.tags.map((element, index) => {
              return (
                <p className="tags" key={"tags-" + index}>
                  {element}
                </p>
              );
            })}
          </div>
        </div>

        {/* Bloc hote et note */}
        <div className="host-stars-div">
          <div className="host-div">
            <p>{housing.host.name}</p>
            <img src={housing.host.picture} alt={housing.title} />
          </div>

          <div className="stars-div">
            {stars.map((element) => {
              const starsNb = parseInt(housing.rating);
              return (
                <span
                  key={"star-" + element}
                  className={element <= starsNb ? "span1" : "span2"}
                >
                  {/* ★ */}
                  <i className="fas fa-star"></i>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="collapse-details">
        <Collapse title="Description" content={housing.description} />
        <Collapse title="Equipements" content={equipement} />
      </div>
    </div>
  );
};

export default Housing;
