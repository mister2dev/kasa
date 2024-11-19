import React from 'react';
import { Link } from 'react-router-dom';
import Datas from '../data/logements.json'

const Card = () => {
  return (
    <div className='logements'>
      {Datas.map((data) => {
        const {id, cover, title} = data;
        return (
          <div className="fiche-logement" key={id}>
            <Link to={{ pathname: "/Logement", search: "?_id="+id }}>
                <img src={cover} alt={title} />
                <h3>{title}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  );
};

export default Card;