const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');
const autenticar = require('../middlewares/auth');

router.get('/alumnos', autenticar, alumnoController.getAllAlumnos);
router.get('/alumnos/:codigoAlumno', autenticar, alumnoController.getAlumnoByCodigo);
router.post('/alumnos', autenticar, alumnoController.createAlumno);
router.put('/alumnos/:codigoAlumno', autenticar, alumnoController.updateAlumno);
router.delete('/alumnos/:codigoAlumno', autenticar, alumnoController.deleteAlumno);

module.exports = router;
