//const Sequelize = require('sequelize');
const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/connectionSequelize');
//console.log("modelo", sequelize);

  const administradorModel = sequelize.define('administrador', {
    codigoAdministrador: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Usuario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Contrasena: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    codigoRol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'rol',
        key: 'codigoRol'
      }
    }
  }, {
    sequelize,
    tableName: 'administrador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoAdministrador" },
        ]
      },
      {
        name: "codigoRol",
        using: "BTREE",
        fields: [
          { name: "codigoRol" },
        ]
      },
    ]
  });

  console.log("modelo",administradorModel);
  module.exports = {administradorModel};