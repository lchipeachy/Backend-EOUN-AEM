const express = require('express');
const router = express.Router();
const municipioController = require('../controllers/municipioController');
const autenticar = require('../middlewares/auth');

router.get('/municipios', autenticar, municipioController.getAllMunicipios); 
router.get('/municipios/:id', autenticar, municipioController.getMunicipioById); 

module.exports = router;
