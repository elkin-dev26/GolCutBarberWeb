const mongoose = require('mongoose');

// Cadena de conexión oficial a MongoDB Atlas para Gol Cut Barber
const URI = 'mongodb+srv://elkin:Golcutbarber123@golcutbarbercluster.wz52pja.mongodb.net/gol_cut_barber?appName=GolCutBarberCluster';

mongoose.connect(URI)
    .then(db => console.log('Base de datos conectada con éxito a MongoDB Atlas'))
    .catch(err => console.error('Error al conectar la base de datos:', err));

module.exports = mongoose;