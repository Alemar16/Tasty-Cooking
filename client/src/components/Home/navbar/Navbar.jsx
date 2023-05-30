import React from 'react';
import Search from './Search';
import logonav from '../../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import github from '../../../assets/img/github.png';
import linkedith from '../../../assets/img/linkedin.png';

import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <div className="imgen__logo">
          <img src={logonav} alt="Logo Not Fount" width="50px" height="50px" />
        </div>
      </div>

      <div className="nav__search">
        <Search />
      </div>
      <div className="redes">
        <div className="linkedit">
          <a
            href="https://www.linkedin.com/in/manuel-romero-11582017b/"
            target="_black"
          >
            <img src={linkedith} alt="linkedint" />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/maalroba22" target="_black">
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
      <div className="nav__buton">
        <Link to="/addrecipe" className="link">
          <h3 className="button">Add New Recipe</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
