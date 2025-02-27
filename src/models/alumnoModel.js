const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/connectionSequelize');

const alumnoModel = sequelize.define('alumno', {
  codigoAlumno: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true
  },
  codigoPersonal: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  codigoMunicipio: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'municipio',
      key: 'codigoMunicipio'
    }
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  apellido: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  fechaDeNacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  genero: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  codigoSeccion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'seccion',
      key: 'codigoSeccion'
    }
  },
  codigoEncargado: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'encargado',
      key: 'codigoEncargado'
    }
  },
  codigoRol: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  celular: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  gradoId: {
    type: DataTypes.STRING(20),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'alumno',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: ["codigoAlumno"]
    },
    {
      name: "codigoMunicipio",
      using: "BTREE",
      fields: ["codigoMunicipio"]
    },
    {
      name: "codigoSeccion",
      using: "BTREE",
      fields: ["codigoSeccion"]
    },
    {
      name: "codigoEncargado",
      using: "BTREE",
      fields: ["codigoEncargado"]
    }
  ]
});

console.log("modelo", alumnoModel);
module.exports = { alumnoModel };