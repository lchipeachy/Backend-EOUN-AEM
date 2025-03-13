const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { administradorModel } = require('../models/administradorModel'); 

dotenv.config(); 


async function verificarCredenciales(username, password) {
    console.log(username);
    const administrador = await administradorModel.findOne({ where: { Usuario: username } });  
    if (!administrador) {
        throw new Error('Usuario no encontrado');
    }

    if(password != administrador.Contrasena) {
        throw new Error('Contraseña incorrecta');
    }
    return administrador;
}

// Función para generar el JWT
function generarJWT(administrador) {
    const payload = {
        id: administrador.codigoAdministrador, 
        username: administrador.Usuario
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' });
    return token;
}

function verificarJWT(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        throw new Error('Token inválido o expirado');
    }
}

module.exports = {
    verificarCredenciales,
    generarJWT,
    verificarJWT
};
