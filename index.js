require('dotenv').config();
require('./src/database/initSequelize');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

// Importar rutas
const administradorRoutes = require('./src/routes/administradorRoutes');
const alumnoRoutes = require('./src/routes/alumnoRoutes');
const asignacionRoutes = require('./src/routes/asignacionRoutes');
const cicloEscolarRoutes = require('./src/routes/ciclo_escolarRoutes');
const cursoCicloEscolarRoutes = require('./src/routes/cursoCicloEscolarRoutes');
const cursoRoutes = require('./src/routes/cursoRoutes');
const departamentoRoutes = require('./src/routes/departamentoRoutes');
const encargadoRoutes = require('./src/routes/encargadoRoutes');
const gradoRoutes = require('./src/routes/gradoRoutes');
const profesorRoutes = require('./src/routes/profesorRoutes');
const seccionRoutes = require('./src/routes/seccionRoutes');
const unidadRoutes = require('./src/routes/unidadRoutes');
const municipioRoutes = require('./src/routes/municipioRoutes');

const authRoutes = require('./src/routes/authRoutes');

const app = express();

// Configuración de middlewares
app.use(cors({
    origin: process.env.FRONTEND_URL
}));

app.use(express.json());
app.use(bodyParser.json()); 

// Definir rutas 
app.use('/api', administradorRoutes);
app.use('/api', alumnoRoutes);
app.use('/api', asignacionRoutes);
app.use('/api', cicloEscolarRoutes);
app.use('/api', cursoCicloEscolarRoutes);
app.use('/api', cursoRoutes);
app.use('/api', departamentoRoutes);
app.use('/api', municipioRoutes);
app.use('/api', encargadoRoutes);
app.use('/api', gradoRoutes);
app.use('/api', profesorRoutes);
app.use('/api', seccionRoutes);
app.use('/api', unidadRoutes);

app.use('/api', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando y conectado a la base de datos!');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
