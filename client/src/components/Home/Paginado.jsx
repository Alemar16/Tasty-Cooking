import React from 'react';
import { paginado } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import './styles/Paginado.css';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default function Paginado({
  tamañoRecipe,
  tamañoPorpagina,
  pageactual,
}) {
  const dispach = useDispatch();
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(tamañoRecipe / tamañoPorpagina); i++) {
    pageNumbers.push(i + 1);
  }

  function handelClickpage(numero) {
    dispach(paginado(numero));
  }

  /* next */
  function handleClickNext() {
    if (pageactual < pageNumbers.length) {
      dispach(paginado(pageactual + 1));
    } else {
      alert('there are no more pages');
    }
  }
  function handleClickPreview() {
    if (pageactual > 1) {
      dispach(paginado(pageactual - 1));
    } else {
      alert('there are no more pages');
    }
  }

  return (
    <div className="container__paginado ">
      <button className="button__paginado" onClick={handleClickPreview}>
        <FaAngleDoubleLeft />
      </button>
      {pageNumbers.map((page) => {
        return (
          <button
            className={`button__paginado ${
              page === pageactual ? 'b__active' : 'button__paginado'
            }`}
            key={page}
            onClick={() => handelClickpage(page)}
          >
            {page}
          </button>
        );
      })}
      <button className="button__paginado" onClick={handleClickNext}>
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}
