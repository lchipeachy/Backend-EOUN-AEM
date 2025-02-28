const { asignacionModel } = require('../models/asignacionModel'); 

class AsignacionService {

  // Obtener todas las asignaciones
    async getAllAsignaciones() {
        try {
        const asignaciones = await asignacionModel.findAll();
        return asignaciones;
        } catch (error) {
        console.error('Error al obtener las asignaciones:', error);
        throw new Error('Error al recuperar las asignaciones');
        }
    }

  // Obtener una asignación por su código
    async getAsignacionByCodigo(codigoAsignacion) {
        try {
        const asig = await asignacionModel.findOne({ where: { codigoAsignacion } });
        if (!asig) {
            throw new Error('Asignación no encontrada');
        }
        return asig;
        } catch (error) {
        console.error('Error al obtener la asignación:', error);
        throw new Error('Error al recuperar la asignación');
        }
    }

  // Crear una nueva asignación
    async createAsignacion(asignacionData) {
        try {
        const nuevaAsignacion = await asignacionModel.create(asignacionData);
        return nuevaAsignacion;
        } catch (error) {
        console.error('Error al crear la asignación:', error);
        throw new Error('Error al crear la asignación');
        }
    }

  // Actualizar una asignación
    async updateAsignacion(codigoAsignacion, asignacionData) {
        try {
        const [updated] = await asignacionModel.update(asignacionData, { where: { codigoAsignacion } });
        if (updated === 0) {
            throw new Error('Asignación no encontrada');
        }
        const asignacionActualizada = await asignacionModel.findOne({ where: { codigoAsignacion } });
        return asignacionActualizada;
        } catch (error) {
        console.error('Error al actualizar la asignación:', error);
        throw new Error('Error al actualizar la asignación');
        }
    }

  // Eliminar una asignación
    async deleteAsignacion(codigoAsignacion) {
        try {
        const deleted = await asignacionModel.destroy({ where: { codigoAsignacion } });
        if (deleted === 0) {
            throw new Error('Asignación no encontrada');
        }
        return { message: 'Asignación eliminada correctamente' };
        } catch (error) {
        console.error('Error al eliminar la asignación:', error);
        throw new Error('Error al eliminar la asignación');
        }
    }
}

module.exports = new AsignacionService();
