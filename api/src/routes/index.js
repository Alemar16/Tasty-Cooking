const { Router } = require('express');
const recetas = require('./recetas.routes');
const dietas = require('./diet.routes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recetas); // contiene todas las rutas de recipes
router.use('/diet', dietas); // las rutas de Diet

module.exports = router;
