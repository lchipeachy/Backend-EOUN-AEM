const MunicipioService = require('../services/municipioService');

async function getAllMunicipios(req, res) {
    try {
        const municipios = await MunicipioService.getAllMunicipios();
        res.status(200).json(municipios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getMunicipioById(req, res) {
    try {
        const municipio = await MunicipioService.getMunicipioById(req.params.id);
        if (municipio) {
        res.status(200).json(municipio);
        } else {
        res.status(404).json({ message: 'Municipio no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllMunicipios,
    getMunicipioById
};
