const express = require('express');
const router = express.Router();

const barberoCtrl = require('../controllers/barbero.controller');

// Rutas para las peticiones de Gol Cut Barber
router.get('/', barberoCtrl.getBarberos);         // Consultar todos
router.post('/', barberoCtrl.createBarbero);       // Guardar uno
router.get('/:id', barberoCtrl.getBarbero);       // Consultar por ID
router.put('/:id', barberoCtrl.editBarbero);      // Actualizar por ID
router.delete('/:id', barberoCtrl.deleteBarbero); // Eliminar por ID

module.exports = router;