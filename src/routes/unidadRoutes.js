const express = require('express');
const router = express.Router();
const unidadController = require('../controllers/unidadController');
const autenticar = require('../middlewares/auth');

router.get('/unidades', autenticar, unidadController.getAllUnidades); 
router.get('/unidades/:id', autenticar, unidadController.getUnidadById); 
router.post('/unidades', autenticar, unidadController.createUnidad); 
router.put('/unidades/:id', autenticar, unidadController.updateUnidad); 
router.delete('/unidades/:id', autenticar, unidadController.deleteUnidad); 

module.exports = router;
