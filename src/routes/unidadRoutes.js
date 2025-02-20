const express = require('express');
const router = express.Router();
const unidadController = require('../controllers/unidadController');

router.get('/unidades', unidadController.getAllUnidades); 
router.get('/unidades/:id', unidadController.getUnidadById); 
router.post('/unidades', unidadController.createUnidad); 
router.put('/unidades/:id', unidadController.updateUnidad); 
router.delete('/unidades/:id', unidadController.deleteUnidad); 

module.exports = router;
