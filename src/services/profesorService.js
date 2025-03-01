const { profesorModel } = require('../models/profesorModel'); 

class ProfesorService {
    // Obtener todos los profesores
    async getAllProfesores() {
        try {
        return await profesorModel.findAll();
        } catch (error) {
        console.error('Error al obtener los profesores:', error);
        throw new Error('Error al recuperar los profesores');
        }
    }

    // Obtener un profesor por ID
    async getProfesorById(id) {
        try {
        return await profesorModel.findByPk(id);
        } catch (error) {
        console.error('Error al obtener el profesor:', error);
        throw new Error('Error al recuperar el profesor');
        }
    }

    // Crear un nuevo profesor
    async createProfesor(data) {
        try {
        return await profesorModel.create(data);
        } catch (error) {
        console.error('Error al crear el profesor:', error);
        throw new Error('Error al registrar el profesor');
        }
    }

    // Actualizar un profesor por ID
    async updateProfesor(id, data) {
        try {
        const profesorActualizado = await profesorModel.update(data, {
            where: { codigoProfesor: id }
        });
        return profesorActualizado;
        } catch (error) {
        console.error('Error al actualizar el profesor:', error);
        throw new Error('Error al modificar el profesor');
        }
    }

    // Eliminar un profesor por ID
    async deleteProfesor(id) {
        try {
        return await profesorModel.destroy({
            where: { codigoProfesor: id }
        });
        } catch (error) {
        console.error('Error al eliminar el profesor:', error);
        throw new Error('Error al eliminar el profesor');
        }
    }
}

module.exports = new ProfesorService();
