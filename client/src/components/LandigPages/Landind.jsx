import React from "react";
import chef from "./img/chef1.png";
import { Link } from "react-router-dom";
/* import './css/order.css'; */
import "./landin.css";
import chefs from "../../assets/img/chef1.png";
import glasses from "../../assets/img/glasses.png";
import vector1 from "../../assets/img/Vector1.png";
import vector2 from "../../assets/img/Vector2.png";

export default function Landing() {
  return (
    <div className="intro">
      <div className="i__left">
        <div className="i__name">
          <h1> Tasty Cooking</h1>
          <span>Armando Martínez</span>
          <span>
            This PI is focused on the development of an API of healthy recipes
            to maintain a healthy eating level, selecting from hundreds of
            recipes that allow you to facilitate your daily diet efficiently and
            effectively. You will be able to search for the recipe to your
            liking, and follow the step by step of how you can prepare it, and
            the types of diets that this food recipe applies.
          </span>

          <Link to="/home">
            <button className="button i__button">Get in</button>
          </Link>
        </div>
      </div>
      <div className="i__right">
        <img src={vector1} alt="vector 1" />
        <img src={vector2} alt="vector 1" />
        <img src={chefs} alt="vector 1" /* width="330px" height="380px" */ />
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}
