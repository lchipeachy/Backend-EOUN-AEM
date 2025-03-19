const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/connectionSequelize');

  const encargadoModel = sequelize.define('encargado', {
    codigoEncargado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Apellido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Telefono: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Celular: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Direccion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Parentesco: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'encargado',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoEncargado" },
        ]
      },
    ]
  });

  console.log("modelo", encargadoModel);
  module.exports = {encargadoModel};