const CursoService = require('../services/cursoService');

// Obtener todos los cursos
async function getAllCursos(req, res) {
    try {
        const cursos = await CursoService.getAllCursos();
        res.status(200).json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Obtener un curso por su código
async function getCursoByCodigo(req, res) {
    const { codigoCurso } = req.params;
    try {
        const curso = await CursoService.getCursoByCodigo(codigoCurso);
        res.status(200).json(curso);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Crear un nuevo curso
async function createCurso(req, res) {
    const cursoData = req.body;
    try {
        const nuevoCurso = await CursoService.createCurso(cursoData);
        res.status(201).json(nuevoCurso);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Actualizar un curso
async function updateCurso(req, res) {
    const { codigoCurso } = req.params;
    const cursoData = req.body;
    try {
        const cursoActualizado = await CursoService.updateCurso(codigoCurso, cursoData);
        res.status(200).json(cursoActualizado);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Eliminar un curso
async function deleteCurso(req, res) {
    const { codigoCurso } = req.params;
    try {
        const response = await CursoService.deleteCurso(codigoCurso);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getAllCursos,
    getCursoByCodigo,
    createCurso,
    updateCurso,
    deleteCurso
};
