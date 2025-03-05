const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');
const autenticar = require('../middlewares/auth');

router.get('/cursos', autenticar, cursoController.getAllCursos);
router.get('/cursos/:codigoCurso', autenticar, cursoController.getCursoByCodigo);
router.post('/cursos', autenticar, cursoController.createCurso);
router.put('/cursos/:codigoCurso', cursoController.updateCurso);
router.delete('/cursos/:codigoCurso', autenticar, cursoController.deleteCurso);

module.exports = router;
