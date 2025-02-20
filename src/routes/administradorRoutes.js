const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administradorController');

router.get('/administradores', administradorController.getAllAdministradores);
router.get('/administradores/:codigoAdministrador', administradorController.getAdministradorByCodigo);
router.post('/administradores', administradorController.createAdministrador);
router.put('/administradores/:codigoAdministrador', administradorController.updateAdministrador);
router.delete('/administradores/:codigoAdministrador', administradorController.deleteAdministrador);

module.exports = router;
