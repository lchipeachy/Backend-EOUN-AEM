const { municipioModel } = require('../models/municipioModel'); 

class MunicipioService {
  // Obtener todos los municipios
    async getAllMunicipios() {
        try {
        return await municipioModel.findAll();
        } catch (error) {
        console.error('Error al obtener los municipios:', error);
        throw new Error('Error al recuperar los municipios');
        }
    }

  // Obtener un municipio por ID
    async getMunicipioById(id) {
        try {
        return await municipioModel.findByPk(id);
        } catch (error) {
        console.error('Error al obtener el municipio:', error);
        throw new Error('Error al recuperar el municipio');
        }
    }
}

module.exports = new MunicipioService();