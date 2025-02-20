const { grado } = require('../models/gradoModel'); 

class GradoService {
  // Obtener todos los grados
    async getAllGrados() {
        try {
        return await grado.findAll();
        } catch (error) {
        console.error('Error al obtener los grados:', error);
        throw new Error('Error al recuperar los grados');
        }
    }

  // Obtener un grado por ID
    async getGradoById(id) {
        try {
        return await grado.findByPk(id);
        } catch (error) {
        console.error('Error al obtener el grado:', error);
        throw new Error('Error al recuperar el grado');
        }
    }

  // Crear un nuevo grado
    async createGrado(data) {
        try {
        return await grado.create(data);
        } catch (error) {
        console.error('Error al crear el grado:', error);
        throw new Error('Error al registrar el grado');
        }
    }

  // Actualizar un grado por ID
    async updateGrado(id, data) {
        try {
        const gradoActualizado = await grado.update(data, {
            where: { codigoGrado: id }
        });
        return gradoActualizado;
        } catch (error) {
        console.error('Error al actualizar el grado:', error);
        throw new Error('Error al modificar el grado');
        }
    }

  // Eliminar un grado por ID
    async deleteGrado(id) {
        try {
        return await grado.destroy({
            where: { codigoGrado: id }
        });
        } catch (error) {
        console.error('Error al eliminar el grado:', error);
        throw new Error('Error al eliminar el grado');
        }
    }
}

module.exports = new GradoService();
