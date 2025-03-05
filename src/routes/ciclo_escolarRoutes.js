const express = require('express');
const router = express.Router();
const cicloEscolarController = require('../controllers/cicloEscolarController');
const autenticar = require('../middlewares/auth');

router.get('/ciclosEscolares', autenticar, cicloEscolarController.getAllCiclosEscolares);
router.get('/ciclosEscolares/:codigoCicloEscolar', autenticar, cicloEscolarController.getCicloEscolarByCodigo);
router.post('/ciclosEscolares', autenticar, cicloEscolarController.createCicloEscolar);
router.put('/ciclosEscolares/:codigoCicloEscolar', autenticar, cicloEscolarController.updateCicloEscolar);
router.delete('/ciclosEscolares/:codigoCicloEscolar', autenticar, cicloEscolarController.deleteCicloEscolar);

module.exports = router;
