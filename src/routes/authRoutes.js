const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para el inicio de sesión (login)
router.post('/login', authController.login);

// Ruta protegida por JWT (ejemplo)
router.get('/perfil', authController.verificarAuth, (req, res) => {
    res.status(200).json({ message: 'Acceso autorizado', administrador: req.administrador });
});

module.exports = router;
