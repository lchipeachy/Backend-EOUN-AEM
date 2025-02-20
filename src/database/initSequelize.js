const { Sequelize } = require('sequelize');
const sequelize = require('./connectionSequelize');
const AdministradorModel = require('../models/administradorModel');

sequelize.sync({ force: false }) // force: false evita que se borren las tablas existentes
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos:', error);
  });