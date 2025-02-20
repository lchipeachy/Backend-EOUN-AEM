const express = require('express');
const router = express.Router();
const encargadoController = require('../controllers/encargadoController');

router.get('/encargados', encargadoController.getAllEncargados); 
router.get('/encargados/:id', encargadoController.getEncargadoById); 
router.post('/encargados', encargadoController.createEncargado); 
router.put('/encargados/:id', encargadoController.updateEncargado); 
router.delete('/encargados/:id', encargadoController.deleteEncargado); 

module.exports = router;
