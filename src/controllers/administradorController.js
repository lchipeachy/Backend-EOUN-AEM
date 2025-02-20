const AdministradorService = require('../services/administradorService');

// Obtener todos los administradores
async function getAllAdministradores(req, res) {
    try {
        const administradores = await AdministradorService.getAllAdministradores();
        res.status(200).json(administradores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Obtener un administrador por su código
async function getAdministradorByCodigo(req, res) {
    const { codigoAdministrador } = req.params;
    try {
        const admin = await AdministradorService.getAdministradorByCodigo(codigoAdministrador);
        res.status(200).json(admin);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Crear un nuevo administrador
async function createAdministrador(req, res) {
    const adminData = req.body;
    try {
        const nuevoAdministrador = await AdministradorService.createAdministrador(adminData);
        res.status(201).json(nuevoAdministrador);
    } catch (error) {
        console.error("Error al crear administrador:", error);
        res.status(500).json({ message: error.message });
    }
}

// Actualizar un administrador
async function updateAdministrador(req, res) {
    const { codigoAdministrador } = req.params;
    const adminData = req.body;
    try {
        const adminActualizado = await AdministradorService.updateAdministrador(codigoAdministrador, adminData);
        res.status(200).json(adminActualizado);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Eliminar un administrador
async function deleteAdministrador(req, res) {
    const { codigoAdministrador } = req.params;
    try {
        const response = await AdministradorService.deleteAdministrador(codigoAdministrador);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getAllAdministradores,
    getAdministradorByCodigo,
    createAdministrador,
    updateAdministrador,
    deleteAdministrador
};
