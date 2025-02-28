const express = require('express');
const router = express.Router();
const departamentoController = require('../controllers/departamentoController');

router.get('/departamentos', departamentoController.getAllDepartamentos);
router.get('/departamentos/:id', departamentoController.getDepartamentoById); 

module.exports = router;
