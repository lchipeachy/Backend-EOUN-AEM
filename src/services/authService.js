// src/services/authService.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { administradorModel } = require('../models/administradorModel'); // Importamos el modelo de administrador

dotenv.config(); // Para cargar las variables de entorno

// Función para verificar si el administrador existe y su contraseña es correcta
async function verificarCredenciales(username, password) {
    console.log(username);
    const administrador = await administradorModel.findOne({ where: { Usuario: username } });  // Buscar el administrador en la base de datos
    if (!administrador) {
        throw new Error('Usuario no encontrado');
    }

    if(password != administrador.Contrasena) {
        throw new Error('Contraseña incorrecta');
    }
    // const contrasenaValida = await bcrypt.compare(password, administrador.Contrasena);
    // console.log(typeof password, typeof administrador.Contrasena);
    // console.log(password);
    // console.log(administrador.Contrasena);  // Comparar la contraseña
    // if (!contrasenaValida) {
    //     throw new Error('Contraseña incorrecta');
    // }

    return administrador;
}

// Función para generar el JWT
function generarJWT(administrador) {
    const payload = {
        id: administrador.codigoAdministrador, // Aquí puedes usar el campo adecuado para el id
        username: administrador.Usuario
    };

    // Firma del JWT con una clave secreta y una expiración de 1 hora
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

// Validar JWT (esto se puede usar en los middlewares)
function verificarJWT(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded; // Devuelve el payload decodificado
    } catch (error) {
        throw new Error('Token inválido o expirado');
    }
}

module.exports = {
    verificarCredenciales,
    generarJWT,
    verificarJWT
};
