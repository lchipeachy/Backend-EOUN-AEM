const AsignacionService = require('../services/asignacionService');

// Obtener todas las asignaciones
async function getAllAsignaciones(req, res) {
    try {
        const asignaciones = await AsignacionService.getAllAsignaciones();
        res.status(200).json(asignaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Obtener una asignación por su código
async function getAsignacionByCodigo(req, res) {
    const { codigoAsignacion } = req.params;
    try {
        const asig = await AsignacionService.getAsignacionByCodigo(codigoAsignacion);
        res.status(200).json(asig);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Crear una nueva asignación
async function createAsignacion(req, res) {
    const asignacionData = req.body;
    try {
        const nuevaAsignacion = await AsignacionService.createAsignacion(asignacionData);
        res.status(201).json(nuevaAsignacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Actualizar una asignación
async function updateAsignacion(req, res) {
    const { codigoAsignacion } = req.params;
    const asignacionData = req.body;
    try {
        const asignacionActualizada = await AsignacionService.updateAsignacion(codigoAsignacion, asignacionData);
        res.status(200).json(asignacionActualizada);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Eliminar una asignación
async function deleteAsignacion(req, res) {
    const { codigoAsignacion } = req.params;
    try {
        const response = await AsignacionService.deleteAsignacion(codigoAsignacion);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getAllAsignaciones,
    getAsignacionByCodigo,
    createAsignacion,
    updateAsignacion,
    deleteAsignacion
};
