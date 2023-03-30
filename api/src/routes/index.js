const { Router } = require('express');
const {getAllGames} = require('../controllers/getAllGames');
const {getGame} = require('../controllers/getGame');
const {postNewGame} = require('../controllers/postNewGame');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', (req, res) => {getAllGames(req, res)});
router.get('/videogames/detail', (req, res) => {getGame(req, res)});
router.post('/createvideogame', (req, res) => {postNewGame(req, res)})

module.exports = router;
