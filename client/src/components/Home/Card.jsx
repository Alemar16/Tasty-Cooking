import React from 'react';
import './styles/card.css';
import { Link } from 'react-router-dom';
import defaul from '../../assets/img/juse.jpg';

export default function Card({ /* id, name, image, diets */ data }) {
  return (
    <div className="menu__card">
      <div className="menu__image">
        <img
          src={data.image}
          alt="Imagen de la Receta No Fount"
          onError={(e) => {
            e.target.src = defaul;
          }}
        />
      </div>
      <div className="menu__info">
        <h6>{data.name}</h6>

        {/*--------- secciones de Dietas --------*/}
        <div className="diet__info">
          {data.diets.map((el) => (
            <p key={el.name}>{el.name}</p>
          ))}
        </div>

        <Link to={`/details/${data.id} `} key={data.id} className="menu__btn">
          Detail
        </Link>
      </div>
    </div>
  );
}
