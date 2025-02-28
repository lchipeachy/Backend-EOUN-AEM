const { cursocicloescolar, cursoCicloModel } = require('../models/cursoCicloEscolarModel'); 

class CursoCicloEscolarService {

  // Obtener todos los cursos ciclo escolar
    async getAllCursosCicloEscolar() {
        try {
        const cursosCicloEscolar = await cursoCicloModel.findAll();
        return cursosCicloEscolar;
        } catch (error) {
        console.error('Error al obtener los cursos ciclo escolar:', error);
        throw new Error('Error al recuperar los cursos ciclo escolar');
        }
    }

  // Obtener un curso ciclo escolar por su código
    async getCursoCicloEscolarByCodigo(codigoCursoCicloEscolar) {
        try {
        const cursoCicloEscolar = await cursoCicloModel.findOne({ where: { codigoCursoCicloEscolar } });
        if (!cursoCicloEscolar) {
            throw new Error('Curso ciclo escolar no encontrado');
        }
        return cursoCicloEscolar;
        } catch (error) {
        console.error('Error al obtener el curso ciclo escolar:', error);
        throw new Error('Error al recuperar el curso ciclo escolar');
        }
    }

  // Crear un nuevo curso ciclo escolar
    async createCursoCicloEscolar(cursoCicloEscolarData) {
        try {
        const nuevoCursoCicloEscolar = await cursoCicloModel.create(cursoCicloEscolarData);
        return nuevoCursoCicloEscolar;
        } catch (error) {
        console.error('Error al crear el curso ciclo escolar:', error);
        throw new Error('Error al crear el curso ciclo escolar');
        }
    }

  // Actualizar un curso ciclo escolar
    async updateCursoCicloEscolar(codigoCursoCicloEscolar, cursoCicloEscolarData) {
        try {
        const [updated] = await cursoCicloModel.update(cursoCicloEscolarData, { where: { codigoCursoCicloEscolar } });
        if (updated === 0) {
            throw new Error('Curso ciclo escolar no encontrado');
        }
        const cursoActualizado = await cursoCicloModel.findOne({ where: { codigoCursoCicloEscolar } });
        return cursoActualizado;
        } catch (error) {
        console.error('Error al actualizar el curso ciclo escolar:', error);
        throw new Error('Error al actualizar el curso ciclo escolar');
        }
    }

  // Eliminar un curso ciclo escolar
    async deleteCursoCicloEscolar(codigoCursoCicloEscolar) {
        try {
        const deleted = await cursoCicloModel.destroy({ where: { codigoCursoCicloEscolar } });
        if (deleted === 0) {
            throw new Error('Curso ciclo escolar no encontrado');
        }
        return { message: 'Curso ciclo escolar eliminado correctamente' };
        } catch (error) {
        console.error('Error al eliminar el curso ciclo escolar:', error);
        throw new Error('Error al eliminar el curso ciclo escolar');
        }
    }
}

module.exports = new CursoCicloEscolarService();
