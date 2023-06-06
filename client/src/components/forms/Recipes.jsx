import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiet, postAddRecipes } from "../../redux/actions/index";
import { Link, useHistory } from "react-router-dom";
import styles from "./Recipes.module.css";
import order_image from "../../assets/img/tasty_cooking.png";
import { FaArrowLeft } from "react-icons/fa";
import logo_booton from "../../assets/img/logo_boottom.png";

/* import './styles.css'; */

export default function Recipes() {
  const dispatch = useDispatch();
  const histori = useHistory();
  const diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getAllDiet());
  }, []);

  const [input, setInput] = useState({
    name: "",
    summary: "",
    healthScore: "",
    stepbyStep: [],
    image: "",
    diet: [],
    createIndb: true,
  });
  console.log(input);

  //usamos un state para el error
  const [errors, setErrors] = useState({});

  function inputHandleChangue(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  function rangeHhandleChangue(e) {
    const newinputrangue = {
      ...input,
      healthScore: e.target.value,
    };
    setInput(newinputrangue);
    setErrors(validate(newinputrangue));
  }
  function selectHandleDiet(e) {
    if (!input.diet.includes(e.target.value)) {
      setInput({
        ...input,
        diet: [...input.diet, e.target.value],
      });
      setErrors(
        validate({
          ...input,
          diet: [...input.diet, e.target.value],
        })
      );
    }
    e.target.value = "";
  }

  function handleStep(e) {
    setInput({
      ...input,
      stepbyStep: [e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postAddRecipes(input));
    // alert('receta Creada con Exito');
    setInput({
      name: "",
      summary: "",
      healthScore: 1,
      stepbyStep: "",
      image: "",
      diet: [],
    });
    histori.push("/home");
  }
  function handleDelete(el) {
    const newinput = {
      ...input,
      diet: input.diet.filter((d) => d !== el),
    };
    setInput(newinput);
    setErrors(validate(newinput));
  }

  return (
    <div className={styles.create_container}>
      {/* -------buttom return------------- */}
      <div className={styles.return_btn_position}>
        <Link to="/home">
          <div className={styles.return_btn_description}>
            <p>
              <FaArrowLeft />
            </p>
          </div>
        </Link>
      </div>

      <div className={styles.menu_conatiner}>
        {/* ------------imagen-logo----------- */}
        <div className={styles.order__image}>
          <img
            src={order_image}
            width="225px"
            height="225px"
            alt="Imagen No Fount"
          />
        </div> 

        {/* formulario */}
        <div className="container__forms">
          <div className="container__logo">
           
          </div>
          <div className={styles.forms__info}>
            <h1>NEW RECIPE</h1>
            <form onSubmit={handleSubmit}>
              <div className="input__text">
                <input
                  className={errors.name && styles.danger}
                  type="text"
                  placeholder="Agregar un nombre de Receta:"
                  onChange={inputHandleChangue}
                  name="name"
                  value={input.name}
                />
              </div>
              {errors.name && <p className={styles.danger}>{errors.name}</p>}

              <div>
                <textarea
                  name="summary"
                  cols="40"
                  rows="3"
                  value={input.summary}
                  onChange={inputHandleChangue}
                  placeholder="Ingrese una Description de la Receta"
                />
              </div>
              {errors.summary && (
                <p className={styles.danger}>{errors.summary}</p>
              )}



              <div className={styles.score}>
                <h2 className={styles.scoreTitle}>Health Score</h2>
                <div className={styles.scoreBar}>
                  <span className={styles.scoreNum}>{input.healthScore}</span>
                  <input
                    type="range"
                    name="healthScore"
                    min="1"
                    max="100"
                    value={input.healthScore}
                    onChange={rangeHhandleChangue}
                  />
                </div>
              </div>

              {/* <div className={styles.score}>
                <span>{input.healthScore}</span>
                <input
                  type="range"
                  name="healthScore"
                  min="1"
                  max="100"
                  value={input.healthScore}
                  onChange={rangeHhandleChangue}
                />
              </div> */}
              {errors.healthScore && (
                <p className={styles.danger}>{errors.healthScore}</p>
              )}

              <div className="input__text">
                <textarea
                  name="stepbyStep"
                  cols="40"
                  rows="3"
                  value={input.stepbyStep}
                  placeholder="Ingrese los pasos par crear la receta"
                  onChange={handleStep}
                />
              </div>

              <div className="input__text">
                <input
                  type="text"
                  name="image"
                  placeholder="ruta imagen"
                  value={input.image}
                  onChange={inputHandleChangue}
                />
              </div>

              <div>
                <select name="diet" onChange={(e) => selectHandleDiet(e)}>
                  {diets?.map((el) => (
                    <option value={el.name}>{el.name}</option>
                  ))}
                </select>

                <ul>
                  <div className={styles.diet}>
                    {input.diet.map((el) => (
                      <div className={styles.chip} key={el.id}>
                        <li>{el}</li>
                        <span
                          /*  key={el.id} */
                          className={styles.buton__x}
                          onClick={() => handleDelete(el)}
                        >
                          x
                        </span>
                      </div>
                    ))}
                  </div>
                </ul>
              </div>
              {errors.diet && <p className={styles.danger}>{errors.diet}</p>}
              {!input.name || !input.summary || !input.diet.length ? (
                <div className={styles.boton__add}>
                  <input
                    type="submit"
                    value=" Add Recipe"
                    className={styles.boton__inactivo}
                    disabled
                  />
                </div>
              ) : (
                <div className={styles.boton__new}>
                  <input
                    type="submit"
                    value=" Add Recipe"
                    className={styles.boton}
                  />
                </div>
              )}
            </form>
            {/* <div>
              <img src={logo_booton} alt="no foun" className={styles.logo_bootom} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// creamos la funcion de validacion
export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "! Recipe  is required";
  } else if (!input.summary) {
    errors.summary = "! summary  is required";
  } else if (!input.healthScore) {
    errors.healthScore = "! healthScore  is required";
  } else if (!input.diet.length) {
    errors.diet = "Seleccione al menos una Dieta";
  }

  return errors;
}
