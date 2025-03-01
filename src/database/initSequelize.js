const { Sequelize } = require('sequelize');
const {sequelize}= require('./connectionSequelize');
const AdministradorModel = require('../models/administradorModel');
const AlumnoModel = require('../models/alumnoModel');
const AsignacionModel = require('../models/asignacionModel');
const CicloModel = require('../models/cicloEscolarModel');
const CursoCicloModel = require('../models/cursoCicloEscolarModel');
const CursoModel = require('../models/cursoModel');
const EncargadoModel = require('../models/encargadoModel');
const DepartamentoModel = require('../models/departamentoModel');
const MunicipioModel = require('../models/municipioModel');
const GradoModel = require('../models/gradoModel');
const ProfesorModel = require('../models/profesorModel');
const SeccionModel = require('../models/seccionModel');


sequelize.sync({ force: false }) // force: false evita que se borren las tablas existentes
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos:', error);
  });