const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/connectionSequelize');

  const municipioModel = sequelize.define('municipio', {
    codigoMunicipio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigoDepartamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departamento',
        key: 'codigoDepartamento'
      }
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'municipio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoMunicipio" },
        ]
      },
      {
        name: "codigoDepartamento",
        using: "BTREE",
        fields: [
          { name: "codigoDepartamento" },
        ]
      },
    ]
  });

  console.log("modelo", municipioModel);
  module.exports = {municipioModel};



    
