const { unidadModel } = require('../models/unidadModel'); 

class UnidadService {
  // Obtener todas las unidades
    async getAllUnidades() {
        try {
        return await unidadModel.findAll();
        } catch (error) {
        console.error('Error al obtener las unidades:', error);
        throw new Error('Error al recuperar las unidades');
        }
    }

  // Obtener una unidad por ID
    async getUnidadById(id) {
        try {
        return await unidadModel.findByPk(id);
        } catch (error) {
        console.error('Error al obtener la unidad:', error);
        throw new Error('Error al recuperar la unidad');
        }
    }

  // Crear una nueva unidad
    async createUnidad(data) {
        try {
        return await unidadModel.create(data);
        } catch (error) {
        console.error('Error al crear la unidad:', error);
        throw new Error('Error al registrar la unidad');
        }
    }

  // Actualizar una unidad por ID
    async updateUnidad(id, data) {
        try {
        const unidadActualizada = await unidadModel.update(data, {
            where: { codigoUnidad: id }
        });
        return unidadActualizada;
        } catch (error) {
        console.error('Error al actualizar la unidad:', error);
        throw new Error('Error al modificar la unidad');
        }
    }

  // Eliminar una unidad por ID
    async deleteUnidad(id) {
        try {
        return await unidadModel.destroy({
            where: { codigoUnidad: id }
        });
        } catch (error) {
        console.error('Error al eliminar la unidad:', error);
        throw new Error('Error al eliminar la unidad');
        }
    }
}

module.exports = new UnidadService();