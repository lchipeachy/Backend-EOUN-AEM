const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

router.get('/cursos', cursoController.getAllCursos);
router.get('/cursos/:codigoCurso', cursoController.getCursoByCodigo);
router.post('/cursos', cursoController.createCurso);
router.put('/cursos/:codigoCurso', cursoController.updateCurso);
router.delete('/cursos/:codigoCurso', cursoController.deleteCurso);

module.exports = router;
