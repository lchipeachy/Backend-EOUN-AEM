const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/connectionSequelize');

  const gradoModel = sequelize.define('grado', {
    codigoGrado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'grado',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoGrado" },
        ]
      },
    ]
  });

  console.log("modelo", gradoModel);
  module.exports = {gradoModel};
