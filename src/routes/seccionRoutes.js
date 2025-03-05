const express = require('express');
const router = express.Router();
const seccionController = require('../controllers/seccionController');
const autenticar = require('../middlewares/auth');

router.get('/secciones', autenticar, seccionController.getAllSecciones); 
router.get('/secciones/:id', autenticar, seccionController.getSeccionById); 
router.post('/secciones', autenticar, seccionController.createSeccion); 
router.put('/secciones/:id', autenticar, seccionController.updateSeccion); 
router.delete('/secciones/:id', autenticar, seccionController.deleteSeccion); 

module.exports = router;