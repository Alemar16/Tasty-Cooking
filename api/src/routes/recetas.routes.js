const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const axios = require('axios');
//const { API_KEY } = process.env;
const router = Router();
const model = require('../controllers/ControllerRecipe');
const { recipes } = require('../controllers/RecetasApi');

/* listar todas las dietas y buscar por name */
router.get('/all', async (req, res) => {
  const name = req.query.name;
  let recipeTotal = await model.getDbinfo();
  if (name) {
    let recipeName = await recipeTotal.filter((el) =>
      el.name.toLowerCase().includes(name.toString().toLowerCase())
    );
    recipeName.length
      ? res.status(200).send(recipeName)
      : res
          .status(404)
          .send(
            'No existe Receta que contenga ese Nombre: ' + name.toLowerCase()
          );
  } else {
    res.status(200).send(recipeTotal);
  }
});

/* --------Busco mis Recetas por Id----------- */

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  let recipeTotal = await model.getDbinfo();
  /* const recipeTotal = await Recipe.findByPk(id); */
  /* res.status(200).send(recipeTotal); */
  if (id) {
    let recipeId = await recipeTotal.filter((el) => el.id == id);
    recipeId.length
      ? res.status(200).json(recipeId)
      : res.status(404).send('No se Encontro Receta con el id: ' + id);
  }
});


/*-------Agrega un Receta y tipos de Dietas------*/
router.post('/', async (req, res) => {
  const { name, summary, healthScore, stepbyStep, image, createIndb, diet } =
  req.body;
  if (!name || !summary) {
    res.status(404).send('las Dtos name y summary son requeridos');
  } else {
    try {
      let recipeCreated = await Recipe.create({
        name,
        summary,
        healthScore,
        stepbyStep,
        image,
        createIndb,
      });
      let dietDb = await Diet.findAll({
        where: {
          name: diet,
        },
      });
      recipeCreated.addDiet(dietDb); // agrego la dieta al modelo Recipe
      res.send('Receta Creado con exito');
    } catch (error) {
      res.status(404).send(error + 'Erro al crear la Receta');
    }
  }
});

/* eliminar un recipe */

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findByPk(id);

    if (!recipe) {
      return res
        .status(404)
        .send("No se pudo encontrar la receta con el ID proporcionado");
    }

    await recipe.destroy();
    res.send("La receta se ha eliminado correctamente");
  } catch (error) {
    res.status(500).send("Error al eliminar la receta: " + error.message);
  }
});

module.exports = router;
