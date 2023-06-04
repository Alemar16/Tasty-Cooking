import React from "react";
import { Link } from "react-router-dom";
import styles from "./landin.module.css";
import video_landing from "../../assets/video/pexels-polina-kovaleva-5644949-1920x1080-25fps.mp4";
import logoLanding from "./img/tasty_cooking.png";
import htmlIcon from "../LandigPages/img/html.png";
import cssIcon from "../LandigPages/img/css.png";
import javascriptIcon from "../LandigPages/img/javascript.png";
import nodejsIcon from "../LandigPages/img/node.png";
import reactIcon from "../LandigPages/img/react.png";
import reduxIcon from "../LandigPages/img/redux.png";
import sequelizeIcon from "../LandigPages/img/sequelize.png";
import postgresqlIcon from "../LandigPages/img/postgres.png";
import githubIcon from "../LandigPages/img/github.png"; 



export default function Landing() {
  return (
    <div className={styles.containerPage}>
      <div className={styles.element_contains}>
        {/* -------Presentation video --------- */}

        <div className={styles.landing_video}>
          <video autoPlay muted loop>
            <source src={video_landing} type="video/mp4" />
          </video>
        </div>

        {/*-------Title, loge and Presentation Name */}

        <div className={styles.p__left}>
          <div className={styles.logo}>
            <img src={logoLanding} alt="Logo Not Fount" />
          </div>

          <div className={styles.presentation}>
            <div className={styles.p__name}>
              <h1> "Individual Project" 2023</h1>
              <span>Armando Martínez</span>
            </div>
            <div className={styles.p__button_container}>
              <Link to="/home">
                <button className={styles.p__button}>Get in</button>
              </Link>
            </div>
            {/*-------------- tecnology icons-------------*/}
            
            <div className={styles.p__icons}>
              <img className={styles.icon} src={htmlIcon} alt="HTML icon" />
              <img className={styles.icon} src={cssIcon} alt="CSS icon" />
              <img
                className={styles.icon}
                src={javascriptIcon}
                alt="JavaScript icon"
              />
              <img
                className={styles.icon}
                src={nodejsIcon}
                alt="Node.js icon"
              />
             <img className={styles.icon} src={reactIcon} alt="React icon" />
              <img className={styles.icon} src={reduxIcon} alt="Redux icon" />
               <img
                className={styles.icon}
                src={sequelizeIcon}
                alt="Sequelize icon"
              />
              <img
                className={styles.icon}
                src={postgresqlIcon}
                alt="PostgreSQL icon"
              />
              <img className={styles.icon} src={githubIcon} alt="GitHub icon" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
