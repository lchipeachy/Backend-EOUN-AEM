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
