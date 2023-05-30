import React from "react";
import { useDispatch } from "react-redux";
import { getAllrecipes } from "../../../redux/actions";
import "./Filter.css";
import {
  orderByaz,
  orderByscore,
  filterBydiet,
  filtercreated,
} from "../../../redux/actions";

export default function Filtros({ diet, setorder, setscore }) {
  const dispatch = useDispatch();

  function handleOderByname(e) {
    dispatch(orderByaz(e.target.value));
    setorder(e.target.value);
  }
  /* ordenar  por Score Puntuacion */

  function handleOrderScore(e) {
    dispatch(orderByscore(e.target.value));
    setscore(e.target.value);
  }

  function handleFilterDiets(e) {
    dispatch(filterBydiet(e.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filtercreated(e.target.value));
  }

  /* corregir handle reset filter */
  function handleClick(e) {
    /*  dispatch(getAllrecipes()); */
    window.location.reload(false);
  }

  return (
    <div className="container__filtros">
      {/* ------------Ordenar de a-z z-a------------ */}
      <select onChange={handleOderByname} name="orderaz" id="orderaz">
        <option value="asc">A-z</option>
        <option value="des">Z-A</option>
      </select>
      {/*-------------All dietas al select------------ */}
      <select onChange={handleFilterDiets} name="diet" id="diet">
        <option value="defauls" disabled>
          seleccione..
        </option>
        <option value="all" defaultValue>
          All
        </option>
        {diet?.map((el) => (
          <option value={el.name} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>

      {/* Filtrar por puntaje Score */}
      <span>Score</span>
      <select onChange={handleOrderScore} name="score" id="score">
        <option value="asc" hidden>
          Lower
        </option>
        <option value="des" hidden>
          Higher
        </option>
        <option value="asc" selected>
          Lower
        </option>
        <option value="des">Higher</option>
      </select>

      {/* filtrar los de la base de dtaos */}
      <select name="ifoapidb" onChange={handleFilterCreated}>
        <option value="all" defaultValue>
          All
        </option>
        <option value="api">Api</option>
        <option value="created">Created</option>
      </select>

      <button onClick={handleClick}>Reset Filter</button>
    </div>
  );
}
