import { React } from 'react';
//import { useState } from 'react';
import { paginado } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getNamerecipes } from '../../../redux/actions/index';
import './navbar.css';
export default function Search() {
  const dispatch = useDispatch();
  /*  const pagereset = useSelector((state) => state.page);  */
  //const [name, setName] = useState('');

  function handleInputChangue(e) {
    e.preventDefault();
    // setName(e.target.value);
    dispatch(paginado(1));
    dispatch(getNamerecipes(e.target.value));
  }

  return (
    <div>
      <div className="container__shear">
        <div>
          <input
            onChange={handleInputChangue}
            type="text"
            placeholder="search Recipe"
          />
        </div>
      </div>
    </div>
  );
}
