const AlumnoService = require('../services/alumnoService');

// Obtener todos los alumnos
async function getAllAlumnos(req, res) {
  try {
    const alumnos = await AlumnoService.getAllAlumnos();
    res.status(200).json(alumnos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Obtener un alumno por su código
async function getAlumnoByCodigo(req, res) {
  const { codigoAlumno } = req.params;
  try {
    const alumno = await AlumnoService.getAlumnoByCodigo(codigoAlumno);
    res.status(200).json(alumno);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// Crear un nuevo alumno
async function createAlumno(req, res) {
  const alumnoData = req.body;
  try {
    const nuevoAlumno = await AlumnoService.createAlumno(alumnoData);
    res.status(201).json(nuevoAlumno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Actualizar un alumno
async function updateAlumno(req, res) {
  const { codigoAlumno } = req.params;
  const alumnoData = req.body;
  try {
    const alumnoActualizado = await AlumnoService.updateAlumno(codigoAlumno, alumnoData);
    res.status(200).json(alumnoActualizado);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// Eliminar un alumno
async function deleteAlumno(req, res) {
  const { codigoAlumno } = req.params;
  try {
    const response = await AlumnoService.deleteAlumno(codigoAlumno);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getAllAlumnos,
  getAlumnoByCodigo,
  createAlumno,
  updateAlumno,
  deleteAlumno
};
