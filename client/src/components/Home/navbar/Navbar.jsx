import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import logonav from "./Logo/tasty_cooking.png";
import { Link } from "react-router-dom";
import github from "../../../assets/img/github.png";
import linkedith from "../../../assets/img/linkedin.png";
import Filtros from "../filters/Filtros";
import "./navbar.css";

const Navbar = () => {
  const allDiet = useSelector((state) => state.diets);

  /* const [order, setOrder] = useState("");
  const [score, setScore] = useState(""); */

  return (
    <nav>
      {/* ------------LOGO------------------------------------------------------ */}
      <div className="logo">
        <div className="imgen__logo">
          {/*  <img
            src={require("./logo/tasty_cooking.png")}
            alt="Logo Not Found"
            width="50px"
            height="50px"
          /> */}
          <img src={logonav} alt="Logo Not Fount" />
        </div>
      </div>

      {/* ----------Input buscador de Recetas------------------------------------- */}
      <div className="nav__search">
        <Search />
      </div>

      {/* -----------Boton AGREGAR nueva receta---------------------------------------- */}
      <div className="nav__buton">
        <Link to="/addrecipe" className="link">
          <h3 className="button">Add New Recipe</h3>
        </Link>
      </div>

      {/* -------------fILTROS------------------------------------------ */}

      <div className="filtros">
        <Filtros diet={allDiet} />
      </div>

      {/* -------------Redes Sociales------------------------------------------ */}
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
