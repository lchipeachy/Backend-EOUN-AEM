const { curso } = require('../models/cursoModel'); 

class CursoService {

  // Obtener todos los cursos
    async getAllCursos() {
        try {
        const cursos = await curso.findAll();
        return cursos;
        } catch (error) {
        console.error('Error al obtener los cursos:', error);
        throw new Error('Error al recuperar los cursos');
        }
    }

  // Obtener un curso por su código
    async getCursoByCodigo(codigoCurso) {
        try {
        const cursoEncontrado = await curso.findOne({ where: { codigoCurso } });
        if (!cursoEncontrado) {
            throw new Error('Curso no encontrado');
        }
        return cursoEncontrado;
        } catch (error) {
        console.error('Error al obtener el curso:', error);
        throw new Error('Error al recuperar el curso');
        }
    }

  // Crear un nuevo curso
    async createCurso(cursoData) {
        try {
        const nuevoCurso = await curso.create(cursoData);
        return nuevoCurso;
        } catch (error) {
        console.error('Error al crear el curso:', error);
        throw new Error('Error al crear el curso');
        }
    }

  // Actualizar un curso
    async updateCurso(codigoCurso, cursoData) {
        try {
        const [updated] = await curso.update(cursoData, { where: { codigoCurso } });
        if (updated === 0) {
            throw new Error('Curso no encontrado');
        }
        const cursoActualizado = await curso.findOne({ where: { codigoCurso } });
        return cursoActualizado;
        } catch (error) {
        console.error('Error al actualizar el curso:', error);
        throw new Error('Error al actualizar el curso');
        }
    }

  // Eliminar un curso
    async deleteCurso(codigoCurso) {
        try {
        const deleted = await curso.destroy({ where: { codigoCurso } });
        if (deleted === 0) {
            throw new Error('Curso no encontrado');
        }
        return { message: 'Curso eliminado correctamente' };
        } catch (error) {
        console.error('Error al eliminar el curso:', error);
        throw new Error('Error al eliminar el curso');
        }
    }
}

module.exports = new CursoService();
