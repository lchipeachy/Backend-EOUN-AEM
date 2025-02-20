const UnidadService = require('../services/unidadService');

async function getAllUnidades(req, res) {
    try {
        const unidades = await UnidadService.getAllUnidades();
        res.status(200).json(unidades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getUnidadById(req, res) {
    try {
        const unidad = await UnidadService.getUnidadById(req.params.id);
        if (unidad) {
        res.status(200).json(unidad);
        } else {
        res.status(404).json({ message: 'Unidad no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createUnidad(req, res) {
    try {
        const nuevaUnidad = await UnidadService.createUnidad(req.body);
        res.status(201).json(nuevaUnidad);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateUnidad(req, res) {
    try {
        const resultado = await UnidadService.updateUnidad(req.params.id, req.body);
        if (resultado[0] > 0) {
        res.status(200).json({ message: 'Unidad actualizada correctamente' });
        } else {
        res.status(404).json({ message: 'Unidad no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteUnidad(req, res) {
    try {
        const resultado = await UnidadService.deleteUnidad(req.params.id);
        if (resultado) {
        res.status(200).json({ message: 'Unidad eliminada correctamente' });
        } else {
        res.status(404).json({ message: 'Unidad no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllUnidades,
    getUnidadById,
    createUnidad,
    updateUnidad,
    deleteUnidad
};
