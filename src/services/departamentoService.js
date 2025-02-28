const { departamentoModel } = require('../models/departamentoModel'); 

class DepartamentoService {
  // Obtener todos los departamentos
    async getAllDepartamentos() {
        try {
        const departamentos = await departamentoModel.findAll();
        return departamentos;
        } catch (error) {
        console.error('Error al obtener los departamentos:', error);
        throw new Error('Error al recuperar los departamentos');
        }
    }

    // Obtener un departamento por ID
    async getDepartamentoById(id) {
      try {
      return await departamentoModel.findByPk(id);
      } catch (error) {
      console.error('Error al obtener el departamento:', error);
      throw new Error('Error al recuperar el departamento');
      }
  }
}

module.exports = new DepartamentoService();
