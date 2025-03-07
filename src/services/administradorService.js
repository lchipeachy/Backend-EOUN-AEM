const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { administradorModel } = require('../models/administradorModel');
const dotenv = require('dotenv');

dotenv.config(); // Para cargar las variables de entorno

class AdministradorService {
    // Obtener todos los administradores
    async getAllAdministradores() {
        try {
            const administradores = await administradorModel.findAll();
            return administradores;
        } catch (error) {
            console.error('Error al obtener los administradores:', error);
            throw new Error('Error al recuperar los administradores');
        }
    }

    // Obtener un administrador por su código
    async getAdministradorByCodigo(codigoAdministrador) {
        try {
            const administrador = await administradorModel.findOne({ where: { codigoAdministrador } });
            if (!administrador) {
                throw new Error('Administrador no encontrado');
            }
            return administrador;
        } catch (error) {
            console.error('Error al obtener el administrador:', error);
            throw new Error('Error al recuperar el administrador');
        }
    }

    // Crear un nuevo administrador
    async createAdministrador(adminData) {
        try {
            const nuevoAdministrador = await administradorModel.create(adminData);
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
            const [updated] = await administradorModel.update(adminData, { where: { codigoAdministrador } });
            if (updated === 0) {
                throw new Error('Administrador no encontrado');
            }
            const adminActualizado = await administradorModel.findOne({ where: { codigoAdministrador } });
            return adminActualizado;
        } catch (error) {
            console.error('Error al actualizar el administrador:', error);
            throw new Error(`Error al actualizar el administrador: ${error.message}`);
        }
    }

    // Eliminar un administrador
    async deleteAdministrador(codigoAdministrador) {
        try {
            const deleted = await administradorModel.destroy({ where: { codigoAdministrador } });
            if (deleted === 0) {
                throw new Error('Administrador no encontrado');
            }
            return { message: 'Administrador eliminado correctamente' };
        } catch (error) {
            console.error('Error al eliminar el administrador:', error);
            throw new Error('Error al eliminar el administrador');
        }
    }

    // Verificar las credenciales de inicio de sesión (usuario y contraseña)
    async verificarCredenciales(username, password) {
        try {
            const administrador = await administradorModel.findOne({ where: { username } });
            if (!administrador) {
                throw new Error('Administrador no encontrado');
            }

            // Verificamos la contraseña
            const esValida = await bcrypt.compare(password, administrador.password);
            if (!esValida) {
                throw new Error('Contraseña incorrecta');
            }

            return administrador;  // Si las credenciales son correctas, retornamos el administrador
        } catch (error) {
            throw new Error(error.message);
        }
    }

    // Generar el JWT para el administrador
    generarJWT(administrador) {
        const payload = {
            id: administrador.id,
            username: administrador.username
        };

        // Firmamos el token con una clave secreta
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
}

module.exports = new AdministradorService();
