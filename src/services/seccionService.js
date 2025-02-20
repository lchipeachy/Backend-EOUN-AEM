const { seccion } = require('../models/seccionModel'); 

class SeccionService {
    // Obtener todas las secciones
    async getAllSecciones() {
        try {
        return await seccion.findAll();
        } catch (error) {
        console.error('Error al obtener las secciones:', error);
        throw new Error('Error al recuperar las secciones');
        }
    }

    // Obtener una sección por ID
    async getSeccionById(id) {
        try {
        return await seccion.findByPk(id);
        } catch (error) {
        console.error('Error al obtener la sección:', error);
        throw new Error('Error al recuperar la sección');
        }
    }

    // Crear una nueva sección
    async createSeccion(data) {
        try {
        return await seccion.create(data);
        } catch (error) {
        console.error('Error al crear la sección:', error);
        throw new Error('Error al registrar la sección');
        }
    }

    // Actualizar una sección por ID
    async updateSeccion(id, data) {
        try {
        const seccionActualizada = await seccion.update(data, {
            where: { codigoSeccion: id }
        });
        return seccionActualizada;
        } catch (error) {
        console.error('Error al actualizar la sección:', error);
        throw new Error('Error al modificar la sección');
        }
    }

    // Eliminar una sección por ID
    async deleteSeccion(id) {
        try {
        return await seccion.destroy({
            where: { codigoSeccion: id }
        });
        } catch (error) {
        console.error('Error al eliminar la sección:', error);
        throw new Error('Error al eliminar la sección');
        }
    }
}

module.exports = new SeccionService();