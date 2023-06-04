const { Router } = require('express');
const recetas = require('./recetas.routes');
const dietas = require('./diet.routes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recetas); // contiene todas las rutas de recipes
router.use('/diet', dietas); // todas las rutas de Diet

module.exports = router;
