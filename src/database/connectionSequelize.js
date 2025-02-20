const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbantoniaestradamonzon', 'root', '1998', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;