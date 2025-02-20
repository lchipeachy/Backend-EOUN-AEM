const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

router.get('/alumnos', alumnoController.getAllAlumnos);
router.get('/alumnos/:codigoAlumno', alumnoController.getAlumnoByCodigo);
router.post('/alumnos', alumnoController.createAlumno);
router.put('/alumnos/:codigoAlumno', alumnoController.updateAlumno);
router.delete('/alumnos/:codigoAlumno', alumnoController.deleteAlumno);

module.exports = router;
