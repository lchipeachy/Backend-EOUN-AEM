const { QueryTypes } = require("sequelize");
const { sequelize } = require("../database/connectionSequelize");
const { alumnoModel } = require("../models/alumnoModel"); 

class AlumnoService {

  async getAllAlumnos() {
    try {
      const alumnos = await sequelize.query(
        `SELECT a.CodigoPersonal, a.Nombre, a.Apellido, a.FechaDeNacimiento, a.Genero, d.nombre AS departamento, m.nombre AS municipio, 
          g.Descripcion AS grado, s.Descripcion AS seccion, 
          concat(e.Nombre, ' ', e.Apellido) AS encargado, e.Telefono, e.Celular, e.Direccion
          FROM alumno a 
          INNER JOIN grado g ON a.codigoGrado = g.codigoGrado
          INNER JOIN seccion s ON a.codigoSeccion = s.codigoSeccion
          INNER JOIN encargado e ON a.codigoEncargado = e.codigoEncargado
          INNER JOIN municipio m ON a.codigoMunicipio = m.codigoMunicipio
          INNER JOIN departamento d ON d.codigoDepartamento = m.codigoDepartamento`,
          {
            type: QueryTypes.SELECT,
          }
      );
      return alumnos;
    } catch (error) {
      console.error("Error al obtener los alumnos:", error);
      throw new Error("Error al recuperar los alumnos");
    }
  }

  // Obtener un alumno por su código
  async getAlumnoByCodigo(codigoAlumno) {
    try {
      const alumnoEncontrado = await sequelize.query(
        `SELECT a.CodigoPersonal, a.Nombre, a.Apellido, a.FechaDeNacimiento, a.Genero, d.nombre AS departamento, m.nombre AS municipio, 
          g.Descripcion AS grado, s.Descripcion AS seccion, 
          concat(e.Nombre, ' ', e.Apellido) AS encargado, e.Telefono, e.Celular, e.Direccion
          FROM alumno a 
          INNER JOIN grado g ON a.codigoGrado = g.codigoGrado
          INNER JOIN seccion s ON a.codigoSeccion = s.codigoSeccion
          INNER JOIN encargado e ON a.codigoEncargado = e.codigoEncargado
          INNER JOIN municipio m ON a.codigoMunicipio = m.codigoMunicipio
          INNER JOIN departamento d ON d.codigoDepartamento = m.codigoDepartamento 
          where a.codigoAlumno = ${codigoAlumno}`,
          {
            type: QueryTypes.SELECT,
          }
      );
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
      const nuevoAlumno = await alumnoModel.create(alumnoData);
      return nuevoAlumno;
    } catch (error) {
      console.error("Error al crear el alumno:", error);
      throw new Error("Error al crear el alumno");
    }
  }

  // Actualizar un alumno
  async updateAlumno(codigoAlumno, alumnoData) {
    try {
      const [updated] = await alumnoModel.update(alumnoData, {
        where: { codigoAlumno },
      });
      if (updated === 0) {
        throw new Error("Alumno no encontrado");
      }
      const alumnoActualizado = await alumnoModel.findOne({
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
      const deleted = await alumnoModel.destroy({ where: { codigoAlumno } });
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
