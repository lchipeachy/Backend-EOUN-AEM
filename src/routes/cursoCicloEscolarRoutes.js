const express = require('express');
const router = express.Router();
const cursoCicloEscolarController = require('../controllers/cursoCicloEscolarController');
const autenticar = require('../middlewares/auth');

router.get('/cursosCicloEscolar', autenticar, cursoCicloEscolarController.getAllCursosCicloEscolar);
router.get('/cursosCicloEscolar/:codigoCursoCicloEscolar', autenticar, cursoCicloEscolarController.getCursoCicloEscolarByCodigo);
router.post('/cursosCicloEscolar', autenticar, cursoCicloEscolarController.createCursoCicloEscolar);
router.put('/cursosCicloEscolar/:codigoCursoCicloEscolar', autenticar, cursoCicloEscolarController.updateCursoCicloEscolar);
router.delete('/cursosCicloEscolar/:codigoCursoCicloEscolar', autenticar, cursoCicloEscolarController.deleteCursoCicloEscolar);

module.exports = router;
