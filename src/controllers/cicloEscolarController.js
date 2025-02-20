const CicloEscolarService = require('../services/cicloEscolarService');

// Obtener todos los ciclos escolares
async function getAllCiclosEscolares(req, res) {
    try {
        const ciclosEscolares = await CicloEscolarService.getAllCiclosEscolares();
        res.status(200).json(ciclosEscolares);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Obtener un ciclo escolar por su código
async function getCicloEscolarByCodigo(req, res) {
    const { codigoCicloEscolar } = req.params;
    try {
        const ciclo = await CicloEscolarService.getCicloEscolarByCodigo(codigoCicloEscolar);
        res.status(200).json(ciclo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Crear un nuevo ciclo escolar
async function createCicloEscolar(req, res) {
    const cicloEscolarData = req.body;
    try {
        const nuevoCicloEscolar = await CicloEscolarService.createCicloEscolar(cicloEscolarData);
        res.status(201).json(nuevoCicloEscolar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Actualizar un ciclo escolar
async function updateCicloEscolar(req, res) {
    const { codigoCicloEscolar } = req.params;
    const cicloEscolarData = req.body;
    try {
        const cicloActualizado = await CicloEscolarService.updateCicloEscolar(codigoCicloEscolar, cicloEscolarData);
        res.status(200).json(cicloActualizado);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Eliminar un ciclo escolar
async function deleteCicloEscolar(req, res) {
    const { codigoCicloEscolar } = req.params;
    try {
        const response = await CicloEscolarService.deleteCicloEscolar(codigoCicloEscolar);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getAllCiclosEscolares,
    getCicloEscolarByCodigo,
    createCicloEscolar,
    updateCicloEscolar,
    deleteCicloEscolar
};
