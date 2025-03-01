const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/connectionSequelize');

  const unidadModel = sequelize.define('unidad', {
    codigoUnidad: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigoAsignacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'asignacion',
        key: 'codigoAsignacion'
      }
    },
    Descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Calificacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'unidad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoUnidad" },
        ]
      },
      {
        name: "codigoAsignacion",
        using: "BTREE",
        fields: [
          { name: "codigoAsignacion" },
        ]
      },
    ]
  });

  console.log("modelo", unidadModel);
  module.exports = {unidadModel};