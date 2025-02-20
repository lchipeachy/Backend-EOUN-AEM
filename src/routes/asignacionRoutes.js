const express = require('express');
const router = express.Router();
const asignacionController = require('../controllers/asignacionController');

router.get('/asignaciones', asignacionController.getAllAsignaciones);
router.get('/asignaciones/:codigoAsignacion', asignacionController.getAsignacionByCodigo);
router.post('/asignaciones', asignacionController.createAsignacion);
router.put('/asignaciones/:codigoAsignacion', asignacionController.updateAsignacion);
router.delete('/asignaciones/:codigoAsignacion', asignacionController.deleteAsignacion);

module.exports = router;
