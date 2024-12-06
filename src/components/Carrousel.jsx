import React, { useState } from "react";
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel">
      {/* Image courante */}
      <div className="carrousel-image">
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carrousel-img"
        />
        {/* Indicateurs (points de navigation) */}
        <div className="carrousel-indicators">
          <p className="indicator">
            {currentIndex + 1}/{pictures.length}
          </p>
        </div>
      </div>
      {/* Boutons de navigation */}
      <button className="carrousel-button prev" onClick={prevSlide}>
        <img src={arrow_left} alt="precedent" />
      </button>
      <button className="carrousel-button next" onClick={nextSlide}>
        <img src={arrow_right} alt="suivant" />
      </button>
    </div>
  );
};

export default Carrousel;
