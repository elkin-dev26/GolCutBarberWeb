const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const { mongoose } = require('./database');

const app = express();

// Configuración de Puerto
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Rutas API
app.use('/api/barberos', require('./routes/barbero.routes'));

// Encontrar la ruta exacta de la carpeta frontend
const frontendPath = path.resolve(__dirname, '..', 'frontend');

// Servir archivos estáticos
app.use(express.static(frontendPath));

// Enviar index.html al entrar a la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Iniciar Servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor ejecutándose en el puerto ${app.get('port')}`);
});