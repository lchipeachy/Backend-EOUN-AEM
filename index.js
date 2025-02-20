require('dotenv').config();
const express = require('express');
const conexion = require('./src/database/connectionMysql');
const bodyParser = require('body-parser');
const cors = require ("cors");

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


const app = express();

app.use(cors()); 
app.use(express.json());


// Middleware para parsear JSON
app.use(bodyParser.json());

// Usar las rutas de administrador
app.use('/api', administradorRoutes);

// Usar las rutas de alumno
app.use('/api', alumnoRoutes);

// Usar las rutas de asignación
app.use('/api', asignacionRoutes);

// Usar las rutas de ciclo escolar
app.use('/api', cicloEscolarRoutes);

// Usar las rutas de curso ciclo escolar
app.use('/api', cursoCicloEscolarRoutes);

// Usar las rutas de curso
app.use('/api', cursoRoutes);

// Usar las rutas de departamento
app.use('/api', departamentoRoutes);

// Usar las rutas de municipio
app.use('/api', municipioRoutes);

// Usar las rutas de encargado
app.use('/api', encargadoRoutes);

// Usar las rutas de grado
app.use('/api', gradoRoutes);

// Usar las rutas de profesor
app.use('/api', profesorRoutes);

// Usar las rutas de seccion
app.use('/api', seccionRoutes);

// Usar las rutas de unidad
app.use('/api', unidadRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando y conectado a la base de datos!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

