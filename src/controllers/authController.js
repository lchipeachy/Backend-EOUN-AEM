// src/controllers/authController.js
const authService = require('../services/authService'); // Servicio de autenticación

// Ruta para iniciar sesión
async function login(req, res) {
    const { username, password } = req.body;
    console.log(req.body);
    try {
        // Verificamos las credenciales del administrador
        const administrador = await authService.verificarCredenciales(username, password);

        // Generamos el JWT
        const token = authService.generarJWT(administrador);

        // Enviamos el token como respuesta
        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token
        });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

// Middleware para verificar el JWT
function verificarAuth(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado, token no proporcionado' });
    }

    try {
        // Verificamos el token
        const decoded = authService.verificarJWT(token);
        req.administrador = decoded; // Guardamos el administrador decodificado en la request
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido o expirado' });
    }
}

module.exports = {
    login,
    verificarAuth
};
