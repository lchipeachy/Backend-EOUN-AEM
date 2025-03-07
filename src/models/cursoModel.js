const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/connectionSequelize');

const cursoModel = sequelize.define('curso', {
    codigoCurso: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigoGrado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grado',
        key: 'codigoGrado'
      }
    },
    Descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'curso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoCurso" },
        ]
      },
      {
        name: "codigoGrado",
        using: "BTREE",
        fields: [
          { name: "codigoGrado" },
        ]
      },
    ]
  });

  console.log("modelo", cursoModel);
  module.exports = {cursoModel};