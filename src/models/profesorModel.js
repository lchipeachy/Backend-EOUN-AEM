const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profesor', {
    codigoProfesor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigoRol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DPI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Nombres: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Apellidos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Especialidad: {
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
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'profesor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigoProfesor" },
        ]
      },
    ]
  });
};
