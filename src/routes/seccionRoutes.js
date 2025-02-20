const express = require('express');
const router = express.Router();
const seccionController = require('../controllers/seccionController');

router.get('/secciones', seccionController.getAllSecciones); 
router.get('/secciones/:id', seccionController.getSeccionById); 
router.post('/secciones', seccionController.createSeccion); 
router.put('/secciones/:id', seccionController.updateSeccion); 
router.delete('/secciones/:id', seccionController.deleteSeccion); 

module.exports = router;