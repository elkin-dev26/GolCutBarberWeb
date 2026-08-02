const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definimos la ficha de información de cada barbero para Gol Cut Barber
const BarberoSchema = new Schema({
    nombre: { type: String, required: true },      // Ej: "Carlos Perez"
    especialidad: { type: String, required: true },// Ej: "Corte clasico y barba"
    telefono: { type: String, required: true },    // Ej: "3001234567"
    estado: { type: String, default: 'Activo' }    // Activo o Inactivo
});

// Exportamos la estructura para usarla en los controladores
module.exports = mongoose.model('Barbero', BarberoSchema);