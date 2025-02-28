const DepartamentoService = require('../services/departamentoService');

async function getAllDepartamentos(req, res) {
    try {
        const departamentos = await DepartamentoService.getAllDepartamentos();
        res.status(200).json(departamentos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllDepartamentos,
};

async function getDepartamentoById(req, res) {
    try {
        const { id } = req.params;
        const departamento = await DepartamentoService.getDepartamentoById(id);

        if (!departamento) {
            return res.status(404).json({ message: 'Departamento no encontrado' });
        }

        res.status(200).json(departamento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllDepartamentos,
    getDepartamentoById,
};
