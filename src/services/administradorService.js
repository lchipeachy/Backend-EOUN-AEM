const { administrador } = require('../models/administradorModel');

class AdministradorService {

async getAllAdministradores() {
    try {
        const administradores = await administrador.findAll();
        return administradores;
    } catch (error) {
        console.error('Error al obtener los administradores:', error);
        throw new Error('Error al recuperar los administradores');
    }
}

// Obtener un administrador por su código
async getAdministradorByCodigo(codigoAdministrador) {
    try {
        const admin = await administrador.findOne({ where: { codigoAdministrador } });
        if (!admin) {
            throw new Error('Administrador no encontrado');
        }
        return admin;
    } catch (error) {
        console.error('Error al obtener el administrador:', error);
        throw new Error('Error al recuperar el administrador');
    }
}

// Crear un nuevo administrador
async createAdministrador(adminData) {
    try {
        const nuevoAdministrador = await administrador.create(adminData);
        return nuevoAdministrador;
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('El código de administrador ya existe.');
        }
        throw new Error(`Error al crear el administrador: ${error.message}`);
    }
}    

// Actualizar un administrador
    async updateAdministrador(codigoAdministrador, adminData) {
    try {
        const [updated] = await administrador.update(adminData, { where: { codigoAdministrador } });
        if (updated === 0) {
            throw new Error('Administrador no encontrado');
        }
        const adminActualizado = await administrador.findOne({ where: { codigoAdministrador } });
        return adminActualizado;
    } catch (error) {
        console.error('Error al actualizar el administrador:', error);
        throw new Error(`Error al actualizar el administrador: ${error.message}`);

    }
}

// Eliminar un administrador
async deleteAdministrador(codigoAdministrador) {
    try {
        const deleted = await administrador.destroy({ where: { codigoAdministrador } });
        if (deleted === 0) {
            throw new Error('Administrador no encontrado');
        }
        return { message: 'Administrador eliminado correctamente' };
        } catch (error) {
            console.error('Error al eliminar el administrador:', error);
            throw new Error('Error al eliminar el administrador');
        }
    }
}

module.exports = new AdministradorService();
