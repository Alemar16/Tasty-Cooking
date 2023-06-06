const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");

/* Obtengo  las recetas de la Api */
const getApiInfo = async () => {
  const lengthdata = await Recipe.findAll();
  if (lengthdata.length < 100) {
    const urlApi = await axios.get(
     `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`

      //`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    );
    let info = [];
    urlApi.data.results.map(async (el) => {
      let recipeCreated = {
        id: el.id,
        name: el.title,
        summary: el.summary,
        healthScore: el.healthScore,
        stepbyStep: el.analyzedInstructions[0]?.steps.map((paso) => {
          return `<b>${paso.number}</b>   ${paso.step}  `;
        }),
        image: el.image,
        diets: el.diets,
      };
      info.push(recipeCreated);
    });
    return info;
  } else {
    console.log("los datos de recetas ya estan cargados 202");
  }
};

/* Obtengo los Datos de la base de Datos */
const getDbinfo = async () => {
  const info = await Recipe.findAll({
    include: {
      model: Diet,
      atrributes: ["name"],
      through: {
        atrributes: ["id", "name"],
      },
    },
  });
  const data = info.map((el) => {
    return {
      id: el.id,
      name: el.name,
      summary: el.summary,
      healthScore: el.healthScore,
      stepbyStep: el.stepbyStep,
      image: el.image,
      diets: el.diets.map((el) => el.name),
      createIndb: el.createIndb,
    };
  });
  return data;
};


module.exports = {
  getDbinfo,
  getApiInfo,
};
