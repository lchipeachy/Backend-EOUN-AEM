const { alumno } = require("../models/alumnoModel"); 

class AlumnoService {
  async getAllAlumnos() {
    try {
      const alumnos = await alumno.findAll();
      return alumnos;
    } catch (error) {
      console.error("Error al obtener los alumnos:", error);
      throw new Error("Error al recuperar los alumnos");
    }
  }

  // Obtener un alumno por su código
  async getAlumnoByCodigo(codigoAlumno) {
    try {
      const alumnoEncontrado = await alumno.findOne({
        where: { codigoAlumno },
      });
      if (!alumnoEncontrado) {
        throw new Error("Alumno no encontrado");
      }
      return alumnoEncontrado;
    } catch (error) {
      console.error("Error al obtener el alumno:", error);
      throw new Error("Error al recuperar el alumno");
    }
  }

  // Crear un nuevo alumno
  async createAlumno(alumnoData) {
    try {
      const nuevoAlumno = await alumno.create(alumnoData);
      return nuevoAlumno;
    } catch (error) {
      console.error("Error al crear el alumno:", error);
      throw new Error("Error al crear el alumno");
    }
  }

  // Actualizar un alumno
  async updateAlumno(codigoAlumno, alumnoData) {
    try {
      const [updated] = await alumno.update(alumnoData, {
        where: { codigoAlumno },
      });
      if (updated === 0) {
        throw new Error("Alumno no encontrado");
      }
      const alumnoActualizado = await alumno.findOne({
        where: { codigoAlumno },
      });
      return alumnoActualizado;
    } catch (error) {
      console.error("Error al actualizar el alumno:", error);
      throw new Error("Error al actualizar el alumno");
    }
  }

  // Eliminar un alumno
  async deleteAlumno(codigoAlumno) {
    try {
      const deleted = await alumno.destroy({ where: { codigoAlumno } });
      if (deleted === 0) {
        throw new Error("Alumno no encontrado");
      }
      return { message: "Alumno eliminado correctamente" };
    } catch (error) {
      console.error("Error al eliminar el alumno:", error);
      throw new Error("Error al eliminar el alumno");
    }
  }
}

module.exports = new AlumnoService();
