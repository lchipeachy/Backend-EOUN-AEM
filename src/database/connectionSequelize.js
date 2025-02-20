const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbantoniaestradamonzo', 'root', '1998', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;