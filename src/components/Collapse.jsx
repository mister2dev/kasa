import React, { useState } from "react";
import arrow_up from "../assets/arrow_up.png";

const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = useState(false); // État pour gérer l'ouverture/fermeture

  return (
    <div className="collapse">
      {/* En-tête avec le titre et le chevron */}
      <div className="collapse_header" onClick={() => setToggle(!toggle)}>
        <span>{title}</span>
        {/* Rotation de l'icône basée sur l'état */}
        <img
          src={arrow_up}
          alt=""
          className={toggle ? "arrow rotated" : "arrow"}
        />
      </div>

      {/* Contenu du collapse, affiché ou caché */}
      {toggle && (
        <div className="collapse_content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
