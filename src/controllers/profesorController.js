const ProfesorService = require('../services/profesorService');

async function getAllProfesores(req, res) {
    try {
        const profesores = await ProfesorService.getAllProfesores();
        res.status(200).json(profesores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getProfesorById(req, res) {
    try {
        const profesor = await ProfesorService.getProfesorById(req.params.id);
        if (profesor) {
        res.status(200).json(profesor);
        } else {
        res.status(404).json({ message: 'Profesor no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createProfesor(req, res) {
    try {
        const nuevoProfesor = await ProfesorService.createProfesor(req.body);
        res.status(201).json(nuevoProfesor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateProfesor(req, res) {
    try {
        const resultado = await ProfesorService.updateProfesor(req.params.id, req.body);
        if (resultado[0] > 0) {
        res.status(200).json({ message: 'Profesor actualizado correctamente' });
        } else {
        res.status(404).json({ message: 'Profesor no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteProfesor(req, res) {
    try {
        const resultado = await ProfesorService.deleteProfesor(req.params.id);
        if (resultado) {
        res.status(200).json({ message: 'Profesor eliminado correctamente' });
        } else {
        res.status(404).json({ message: 'Profesor no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllProfesores,
    getProfesorById,
    createProfesor,
    updateProfesor,
    deleteProfesor
};
