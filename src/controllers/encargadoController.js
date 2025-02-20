const EncargadoService = require('../services/encargadoService');

async function getAllEncargados(req, res) {
    try {
        const encargados = await EncargadoService.getAllEncargados();
        res.status(200).json(encargados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getEncargadoById(req, res) {
    try {
        const encargado = await EncargadoService.getEncargadoById(req.params.id);
        if (encargado) {
        res.status(200).json(encargado);
        } else {
        res.status(404).json({ message: 'Encargado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createEncargado(req, res) {
    try {
        const nuevoEncargado = await EncargadoService.createEncargado(req.body);
        res.status(201).json(nuevoEncargado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateEncargado(req, res) {
    try {
        const resultado = await EncargadoService.updateEncargado(req.params.id, req.body);
        if (resultado[0] > 0) {
        res.status(200).json({ message: 'Encargado actualizado correctamente' });
        } else {
        res.status(404).json({ message: 'Encargado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteEncargado(req, res) {
    try {
        const resultado = await EncargadoService.deleteEncargado(req.params.id);
        if (resultado) {
        res.status(200).json({ message: 'Encargado eliminado correctamente' });
        } else {
        res.status(404).json({ message: 'Encargado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllEncargados,
    getEncargadoById,
    createEncargado,
    updateEncargado,
    deleteEncargado
};
