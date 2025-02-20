const express = require('express');
const router = express.Router();
const cursoCicloEscolarController = require('../controllers/cursoCicloEscolarController');

router.get('/cursosCicloEscolar', cursoCicloEscolarController.getAllCursosCicloEscolar);
router.get('/cursosCicloEscolar/:codigoCursoCicloEscolar', cursoCicloEscolarController.getCursoCicloEscolarByCodigo);
router.post('/cursosCicloEscolar', cursoCicloEscolarController.createCursoCicloEscolar);
router.put('/cursosCicloEscolar/:codigoCursoCicloEscolar', cursoCicloEscolarController.updateCursoCicloEscolar);
router.delete('/cursosCicloEscolar/:codigoCursoCicloEscolar', cursoCicloEscolarController.deleteCursoCicloEscolar);

module.exports = router;
