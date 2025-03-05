const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administradorController');
const autenticar = require('../middlewares/auth');  // Importamos el middleware de autenticación

// Rutas protegidas con el middleware de autenticación
router.get('/administradores', autenticar, administradorController.getAllAdministradores);  // Protegida
router.get('/administradores/:codigoAdministrador', autenticar, administradorController.getAdministradorByCodigo);  // Protegida
router.post('/administradores', autenticar, administradorController.createAdministrador);  // Protegida
router.put('/administradores/:codigoAdministrador', autenticar, administradorController.updateAdministrador);  // Protegida
router.delete('/administradores/:codigoAdministrador', autenticar, administradorController.deleteAdministrador);  // Protegida

module.exports = router;