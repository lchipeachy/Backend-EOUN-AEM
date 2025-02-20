const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/departamentoController');

router.get('/departamentos', departamentoController.getAllDepartamentos);

module.exports = router;
