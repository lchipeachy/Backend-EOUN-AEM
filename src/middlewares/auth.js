const jwt = require('jsonwebtoken');

const autenticar = (req, res, next) => {
    // Obtener el token del encabezado Authorization
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No se proporcionó un token de autenticación' });
    }

    try {
        // Verificar el token usando la clave secreta
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Almacenamos los datos del usuario (por ejemplo, su id) en la solicitud
        req.usuario = decoded;
        next(); // Si el token es válido, pasamos al siguiente middleware o controlador
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }
};

module.exports = autenticar;
