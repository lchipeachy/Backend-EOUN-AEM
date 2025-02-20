const CursoCicloEscolarService = require('../services/cursoCicloEscolarService');

// Obtener todos los cursos ciclo escolar
async function getAllCursosCicloEscolar(req, res) {
    try {
        const cursosCicloEscolar = await CursoCicloEscolarService.getAllCursosCicloEscolar();
        res.status(200).json(cursosCicloEscolar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Obtener un curso ciclo escolar por su código
async function getCursoCicloEscolarByCodigo(req, res) {
    const { codigoCursoCicloEscolar } = req.params;
    try {
        const cursoCicloEscolar = await CursoCicloEscolarService.getCursoCicloEscolarByCodigo(codigoCursoCicloEscolar);
        res.status(200).json(cursoCicloEscolar);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Crear un nuevo curso ciclo escolar
async function createCursoCicloEscolar(req, res) {
    const cursoCicloEscolarData = req.body;
    try {
        const nuevoCursoCicloEscolar = await CursoCicloEscolarService.createCursoCicloEscolar(cursoCicloEscolarData);
        res.status(201).json(nuevoCursoCicloEscolar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Actualizar un curso ciclo escolar
async function updateCursoCicloEscolar(req, res) {
    const { codigoCursoCicloEscolar } = req.params;
    const cursoCicloEscolarData = req.body;
    try {
        const cursoActualizado = await CursoCicloEscolarService.updateCursoCicloEscolar(codigoCursoCicloEscolar, cursoCicloEscolarData);
        res.status(200).json(cursoActualizado);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Eliminar un curso ciclo escolar
async function deleteCursoCicloEscolar(req, res) {
    const { codigoCursoCicloEscolar } = req.params;
    try {
        const response = await CursoCicloEscolarService.deleteCursoCicloEscolar(codigoCursoCicloEscolar);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getAllCursosCicloEscolar,
    getCursoCicloEscolarByCodigo,
    createCursoCicloEscolar,
    updateCursoCicloEscolar,
    deleteCursoCicloEscolar
};
