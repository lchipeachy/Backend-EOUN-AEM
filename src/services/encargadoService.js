const { encargadoModel } = require('../models/encargadoModel'); 

class EncargadoService {
  // Obtener todos los encargados
    async getAllEncargados() {
        try {
        return await encargadoModel.findAll();
        } catch (error) {
        console.error('Error al obtener los encargados:', error);
        throw new Error('Error al recuperar los encargados');
        }
    }

  // Obtener un encargado por ID
    async getEncargadoById(id) {
        try {
        return await encargadoModel.findByPk(id);
        } catch (error) {
        console.error('Error al obtener el encargado:', error);
        throw new Error('Error al recuperar el encargado');
        }
    }

    // Obtener un encargado por DPI
    async getEncargadoByDPI(dpi) {
      try {
        console.log("Buscando encargado con DPI:", dpi);
        return await encargadoModel.findOne({
          where: { Dpi: dpi.toString() } // Asegurándote de usar 'where'
        });
      } catch (error) {
        console.error('Error al obtener el encargado:', error);
        throw new Error('Error al recuperar el encargado');
      }
    }    

  // Crear un nuevo encargado
    async createEncargado(data) {
        try {
        return await encargadoModel.create(data);
        } catch (error) {
        console.error('Error al crear el encargado:', error);
        throw new Error('Error al registrar el encargado');
        }
    }

  // Actualizar un encargado por ID
    async updateEncargado(id, data) {
        try {
        const encargadoActualizado = await encargadoModel.update(data, {
            where: { codigoEncargado: id }
        });
        return encargadoActualizado;
        } catch (error) {
        console.error('Error al actualizar el encargado:', error);
        throw new Error('Error al modificar el encargado');
        }
    }

  // Eliminar un encargado por ID
    async deleteEncargado(id) {
        try {
        return await encargadoModel.destroy({
            where: { codigoEncargado: id }
        });
        } catch (error) {
        console.error('Error al eliminar el encargado:', error);
        throw new Error('Error al eliminar el encargado');
        }
    }
}

module.exports = new EncargadoService();
