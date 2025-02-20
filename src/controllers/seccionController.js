const SeccionService = require('../services/seccionService');

async function getAllSecciones(req, res) {
    try {
        const secciones = await SeccionService.getAllSecciones();
        res.status(200).json(secciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getSeccionById(req, res) {
    try {
        const seccion = await SeccionService.getSeccionById(req.params.id);
        if (seccion) {
        res.status(200).json(seccion);
        } else {
        res.status(404).json({ message: 'Sección no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createSeccion(req, res) {
    try {
        const nuevaSeccion = await SeccionService.createSeccion(req.body);
        res.status(201).json(nuevaSeccion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateSeccion(req, res) {
    try {
        const resultado = await SeccionService.updateSeccion(req.params.id, req.body);
        if (resultado[0] > 0) {
        res.status(200).json({ message: 'Sección actualizada correctamente' });
        } else {
        res.status(404).json({ message: 'Sección no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteSeccion(req, res) {
    try {
        const resultado = await SeccionService.deleteSeccion(req.params.id);
        if (resultado) {
        res.status(200).json({ message: 'Sección eliminada correctamente' });
        } else {
        res.status(404).json({ message: 'Sección no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllSecciones,
    getSeccionById,
    createSeccion,
    updateSeccion,
    deleteSeccion
};