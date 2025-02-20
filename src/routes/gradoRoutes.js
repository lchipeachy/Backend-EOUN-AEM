const express = require('express');
const router = express.Router();
const gradoController = require('../controllers/gradoController');

router.get('/grados', gradoController.getAllGrados); 
router.get('/grados/:id', gradoController.getGradoById); 
router.post('/grados', gradoController.createGrado); 
router.put('/grados/:id', gradoController.updateGrado); 
router.delete('/grados/:id', gradoController.deleteGrado); 

module.exports = router;
