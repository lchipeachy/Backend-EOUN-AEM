const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesorController');
const autenticar = require('../middlewares/auth');

router.get('/profesores', profesorController.getAllProfesores); 
router.get('/profesores/:id', profesorController.getProfesorById); 
router.post('/profesores', profesorController.createProfesor); 
router.put('/profesores/:id', profesorController.updateProfesor); 
router.delete('/profesores/:id', autenticar, profesorController.deleteProfesor); 

module.exports = router;
