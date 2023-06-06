import { React } from 'react';

import { paginado } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getNamerecipes } from '../../../redux/actions/index';

import styles from "./Search.module.css";


export default function Search() {
  const dispatch = useDispatch();


  function handleInputChange(e) {
    e.preventDefault();

    dispatch(paginado(1));
    dispatch(getNamerecipes(e.target.value));
  }

  return (
    <div>
      <div className={styles.container__shear}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="     Search Recipe"
        ></input>
        <div className={styles.icon_search}>
        </div>
      </div>
    </div>
  );
}
