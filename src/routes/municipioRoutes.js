const express = require('express');
const router = express.Router();
const municipioController = require('../controllers/municipioController');

router.get('/municipios', municipioController.getAllMunicipios); 
router.get('/municipios/:id', municipioController.getMunicipioById); 

module.exports = router;
