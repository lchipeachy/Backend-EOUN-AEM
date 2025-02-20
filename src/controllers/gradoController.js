const GradoService = require('../services/gradoService');

async function getAllGrados(req, res) {
    try {
        const grados = await GradoService.getAllGrados();
        res.status(200).json(grados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getGradoById(req, res) {
    try {
        const grado = await GradoService.getGradoById(req.params.id);
        if (grado) {
        res.status(200).json(grado);
        } else {
        res.status(404).json({ message: 'Grado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createGrado(req, res) {
    try {
        const nuevoGrado = await GradoService.createGrado(req.body);
        res.status(201).json(nuevoGrado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateGrado(req, res) {
    try {
        const resultado = await GradoService.updateGrado(req.params.id, req.body);
        if (resultado[0] > 0) {
        res.status(200).json({ message: 'Grado actualizado correctamente' });
        } else {
        res.status(404).json({ message: 'Grado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteGrado(req, res) {
    try {
        const resultado = await GradoService.deleteGrado(req.params.id);
        if (resultado) {
        res.status(200).json({ message: 'Grado eliminado correctamente' });
        } else {
        res.status(404).json({ message: 'Grado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllGrados,
    getGradoById,
    createGrado,
    updateGrado,
    deleteGrado
};
