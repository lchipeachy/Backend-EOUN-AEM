const express = require('express');
const router = express.Router();
const encargadoController = require('../controllers/encargadoController');
const autenticar = require('../middlewares/auth');

router.get('/encargados', autenticar, encargadoController.getAllEncargados); 
router.get('/encargado', autenticar, encargadoController.getEncargado); 
// router.get('/encargados/:dpi', autenticar, encargadoController.getEncargadoByDPI); 
router.post('/encargados', autenticar, encargadoController.createEncargado); 
router.put('/encargados/:id', autenticar, encargadoController.updateEncargado); 
router.delete('/encargados/:id', autenticar, encargadoController.deleteEncargado); 

module.exports = router;
