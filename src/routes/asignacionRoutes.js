const express = require('express');
const router = express.Router();
const asignacionController = require('../controllers/asignacionController');
const autenticar = require('../middlewares/auth');

router.get('/asignaciones', autenticar, asignacionController.getAllAsignaciones);
router.get('/asignaciones/:codigoAsignacion', autenticar, asignacionController.getAsignacionByCodigo);
router.post('/asignaciones',autenticar, asignacionController.createAsignacion);
router.put('/asignaciones/:codigoAsignacion',autenticar, asignacionController.updateAsignacion);
router.delete('/asignaciones/:codigoAsignacion',autenticar, asignacionController.deleteAsignacion);

module.exports = router;
