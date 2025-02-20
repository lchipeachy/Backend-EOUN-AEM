var DataTypes = require("sequelize").DataTypes;
var _administrador = require("./administradorModel");
var _alumno = require("./alumnoModel");
var _asignacion = require("./asignacionModel");
var _cicloescolar = require("./cicloEscolarModel");
var _curso = require("./cursoModel");
var _cursocicloescolar = require("./cursoCicloEscolarModel");
var _departamento = require("./departamentoModel");
var _encargado = require("./encargadoModel");
var _grado = require("./gradoModel");
var _municipio = require("./municipioModel");
var _profesor = require("./profesorModel");
var _rol = require("./rolModel");
var _seccion = require("./seccionModel");
var _unidad = require("./unidadModel");

function initModels(sequelize) {
  var administrador = _administrador(sequelize, DataTypes);
  var alumno = _alumno(sequelize, DataTypes);
  var asignacion = _asignacion(sequelize, DataTypes);
  var cicloescolar = _cicloescolar(sequelize, DataTypes);
  var curso = _curso(sequelize, DataTypes);
  var cursocicloescolar = _cursocicloescolar(sequelize, DataTypes);
  var departamento = _departamento(sequelize, DataTypes);
  var encargado = _encargado(sequelize, DataTypes);
  var grado = _grado(sequelize, DataTypes);
  var municipio = _municipio(sequelize, DataTypes);
  var profesor = _profesor(sequelize, DataTypes);
  var rol = _rol(sequelize, DataTypes);
  var seccion = _seccion(sequelize, DataTypes);
  var unidad = _unidad(sequelize, DataTypes);

  asignacion.belongsTo(alumno, { as: "codigoAlumno_alumno", foreignKey: "codigoAlumno"});
  alumno.hasMany(asignacion, { as: "asignacions", foreignKey: "codigoAlumno"});
  unidad.belongsTo(asignacion, { as: "codigoAsignacion_asignacion", foreignKey: "codigoAsignacion"});
  asignacion.hasMany(unidad, { as: "unidads", foreignKey: "codigoAsignacion"});
  cursocicloescolar.belongsTo(cicloescolar, { as: "codigoCicloEscolar_cicloescolar", foreignKey: "codigoCicloEscolar"});
  cicloescolar.hasMany(cursocicloescolar, { as: "cursocicloescolars", foreignKey: "codigoCicloEscolar"});
  cursocicloescolar.belongsTo(curso, { as: "codigoCurso_curso", foreignKey: "codigoCurso"});
  curso.hasMany(cursocicloescolar, { as: "cursocicloescolars", foreignKey: "codigoCurso"});
  asignacion.belongsTo(cursocicloescolar, { as: "codigoCursoCicloEscolar_cursocicloescolar", foreignKey: "codigoCursoCicloEscolar"});
  cursocicloescolar.hasMany(asignacion, { as: "asignacions", foreignKey: "codigoCursoCicloEscolar"});
  municipio.belongsTo(departamento, { as: "codigoDepartamento_departamento", foreignKey: "codigoDepartamento"});
  departamento.hasMany(municipio, { as: "municipios", foreignKey: "codigoDepartamento"});
  alumno.belongsTo(encargado, { as: "codigoEncargado_encargado", foreignKey: "codigoEncargado"});
  encargado.hasMany(alumno, { as: "alumnos", foreignKey: "codigoEncargado"});
  curso.belongsTo(grado, { as: "codigoGrado_grado", foreignKey: "codigoGrado"});
  grado.hasMany(curso, { as: "cursos", foreignKey: "codigoGrado"});
  seccion.belongsTo(grado, { as: "codigoGrado_grado", foreignKey: "codigoGrado"});
  grado.hasMany(seccion, { as: "seccions", foreignKey: "codigoGrado"});
  alumno.belongsTo(municipio, { as: "codigoMunicipio_municipio", foreignKey: "codigoMunicipio"});
  municipio.hasMany(alumno, { as: "alumnos", foreignKey: "codigoMunicipio"});
  asignacion.belongsTo(profesor, { as: "codigoProfesor_profesor", foreignKey: "codigoProfesor"});
  profesor.hasMany(asignacion, { as: "asignacions", foreignKey: "codigoProfesor"});
  administrador.belongsTo(rol, { as: "codigoRol_rol", foreignKey: "codigoRol"});
  rol.hasMany(administrador, { as: "administradors", foreignKey: "codigoRol"});
  alumno.belongsTo(seccion, { as: "CodigoSeccion_seccion", foreignKey: "CodigoSeccion"});
  seccion.hasMany(alumno, { as: "alumnos", foreignKey: "CodigoSeccion"});

  return {
    administrador,
    alumno,
    asignacion,
    cicloescolar,
    curso,
    cursocicloescolar,
    departamento,
    encargado,
    grado,
    municipio,
    profesor,
    rol,
    seccion,
    unidad,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
