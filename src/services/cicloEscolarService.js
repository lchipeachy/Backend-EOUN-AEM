const { cicloescolar } = require('../models/cicloEscolarModel'); 

class CicloEscolarService {

  // Obtener todos los ciclos escolares
    async getAllCiclosEscolares() {
        try {
        const ciclosEscolares = await cicloescolar.findAll();
        return ciclosEscolares;
        } catch (error) {
        console.error('Error al obtener los ciclos escolares:', error);
        throw new Error('Error al recuperar los ciclos escolares');
        }
    }

  // Obtener un ciclo escolar por su código
    async getCicloEscolarByCodigo(codigoCicloEscolar) {
        try {
        const ciclo = await cicloescolar.findOne({ where: { codigoCicloEscolar } });
        if (!ciclo) {
            throw new Error('Ciclo escolar no encontrado');
        }
        return ciclo;
        } catch (error) {
        console.error('Error al obtener el ciclo escolar:', error);
        throw new Error('Error al recuperar el ciclo escolar');
        }
    }

  // Crear un nuevo ciclo escolar
    async createCicloEscolar(cicloEscolarData) {
        try {
        const nuevoCicloEscolar = await cicloescolar.create(cicloEscolarData);
        return nuevoCicloEscolar;
        } catch (error) {
        console.error('Error al crear el ciclo escolar:', error);
        throw new Error('Error al crear el ciclo escolar');
        }
    }

  // Actualizar un ciclo escolar
    async updateCicloEscolar(codigoCicloEscolar, cicloEscolarData) {
        try {
        const [updated] = await cicloescolar.update(cicloEscolarData, { where: { codigoCicloEscolar } });
        if (updated === 0) {
            throw new Error('Ciclo escolar no encontrado');
        }
        const cicloActualizado = await cicloescolar.findOne({ where: { codigoCicloEscolar } });
        return cicloActualizado;
        } catch (error) {
        console.error('Error al actualizar el ciclo escolar:', error);
        throw new Error('Error al actualizar el ciclo escolar');
        }
    }

  // Eliminar un ciclo escolar
    async deleteCicloEscolar(codigoCicloEscolar) {
        try {
        const deleted = await cicloescolar.destroy({ where: { codigoCicloEscolar } });
        if (deleted === 0) {
            throw new Error('Ciclo escolar no encontrado');
        }
        return { message: 'Ciclo escolar eliminado correctamente' };
        } catch (error) {
        console.error('Error al eliminar el ciclo escolar:', error);
        throw new Error('Error al eliminar el ciclo escolar');
        }
    }
}

module.exports = new CicloEscolarService();
