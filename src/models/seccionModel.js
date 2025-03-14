const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/connectionSequelize');

  const seccionModel = sequelize.define('seccion', {
    codigoSeccion: {
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
    tableName: 'seccion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoSeccion" },
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

  console.log("modelo", seccionModel);
  module.exports = {seccionModel};
