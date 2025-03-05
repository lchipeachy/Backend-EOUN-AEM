const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/departamentoController');
const autenticar = require('../middlewares/auth');

router.get('/departamentos', autenticar, departamentoController.getAllDepartamentos);
router.get('/departamentos/:id', autenticar, departamentoController.getDepartamentoById); 

module.exports = router;
