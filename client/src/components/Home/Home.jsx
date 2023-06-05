import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getAllrecipes, getAllDiet } from "../../redux/actions/index";
import Card from "./Card";
import Paginado from "./Paginado";
import "./styles/home.css";
import Navbar from "./navbar/Navbar";
import Loading from "./Loading/Loading";
import Error404 from "../Error/Error404";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const recipe = useSelector((state) => state.recipes);
  const page = useSelector((state) => state.page);
  const error = useSelector((state) => state.error);
  const allDiet = useSelector((state) => state.diets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllrecipes());
    dispatch(getAllDiet());
  }, [dispatch]);

  /*----------------- Paginado Nuevo----------------- */
  let currenRecipes = [];
  const tamañoRecipe = recipe.length;
  const tamañoPorpagina = 9;
  let indexFinal = tamañoPorpagina * page; // 9 pagina
  let inicial = indexFinal - tamañoPorpagina; // 9-9=0
  currenRecipes = recipe.slice(inicial, indexFinal);

  return (
    <div className="home.container">
      <div className="background-home">
        <div className="container_return_btn">
          <Link to="/">
            <button className="return_btn">Logout</button>
          </Link>
        </div>

        {/* --------------Paginado-------------- */}
        <div className="paginado-container">
          <Paginado
            tamañoRecipe={tamañoRecipe}
            tamañoPorpagina={tamañoPorpagina}
            pageactual={page}
          />
        </div>
        {/* -------------------Navbar------------------- */}
        <div className="navbar-container">
          <Navbar />
        </div>

        {/* --------------Card ----------*/}
        <div className="gallery_container">
          {error ? (
            <Error404 />
          ) : currenRecipes.length === 0 ? (
            <Loading />
          ) : (
            <div className="gallary_image_box">
              {currenRecipes?.map((recipe) => (
                <Card data={recipe} key={recipe.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
