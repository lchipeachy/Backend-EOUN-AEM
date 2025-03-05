const express = require('express');
const router = express.Router();
const gradoController = require('../controllers/gradoController');
const autenticar = require('../middlewares/auth');

router.get('/grados', autenticar, gradoController.getAllGrados); 
router.get('/grados/:id', autenticar, gradoController.getGradoById); 
router.post('/grados', autenticar, gradoController.createGrado); 
router.put('/grados/:id', autenticar, gradoController.updateGrado); 
router.delete('/grados/:id', autenticar, gradoController.deleteGrado); 

module.exports = router;
