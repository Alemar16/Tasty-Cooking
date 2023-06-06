import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import logonav from "./Logo/tasty_cooking_SF.png";
import { Link } from "react-router-dom";
import github from "../../../assets/img/github.png";
import linkedith from "../../../assets/img/linkedin.png";
import Filtros from "../filters/Filtros";
import "./navbar.css";

const Navbar = ({page}) => {
  const allDiet = useSelector((state) => state.diets);



  return (
    <nav>
      

      <div className="imagen__logo">
        <img src={logonav} alt="Logo Not Fount" width="200px" height="50px" />
      </div>

      
      <div className="nav__search">
        <Search pageactual={page} />
      </div>

      
      <div className="nav__buton">
        <Link to="/addrecipe" className="link">
          <h3 className="button">Add New Recipe</h3>
        </Link>
      </div>

      

      <div className="filtros">
        <Filtros diet={allDiet} pageactual={page} />
      </div>


      <div className="redes">
        <div className="linkedit">
          <a
            href="https://www.linkedin.com/in/armando-mart%C3%ADnez-zambrano-51a714247/"
            target="_blank"
          >
            <img src={linkedith} alt="linkedint" />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/Alemar16" target="_blank">
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// 