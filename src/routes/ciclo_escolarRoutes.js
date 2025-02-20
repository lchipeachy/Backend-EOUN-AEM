const express = require('express');
const router = express.Router();
const cicloEscolarController = require('../controllers/cicloEscolarController');

router.get('/ciclosEscolares', cicloEscolarController.getAllCiclosEscolares);
router.get('/ciclosEscolares/:codigoCicloEscolar', cicloEscolarController.getCicloEscolarByCodigo);
router.post('/ciclosEscolares', cicloEscolarController.createCicloEscolar);
router.put('/ciclosEscolares/:codigoCicloEscolar', cicloEscolarController.updateCicloEscolar);
router.delete('/ciclosEscolares/:codigoCicloEscolar', cicloEscolarController.deleteCicloEscolar);

module.exports = router;
