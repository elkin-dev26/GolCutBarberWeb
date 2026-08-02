const Barbero = require('../models/barbero');

const barberoCtrl = {};

// 1. Obtener todos los barberos registrados
barberoCtrl.getBarberos = async (req, res) => {
    const barberos = await Barbero.find();
    res.json(barberos);
};

// 2. Guardar un nuevo barbero
barberoCtrl.createBarbero = async (req, res) => {
    const barbero = new Barbero({
        nombre: req.body.nombre,
        especialidad: req.body.especialidad,
        telefono: req.body.telefono,
        estado: req.body.estado
    });
    await barbero.save();
    res.json({ status: 'Barbero guardado con éxito' });
};

// 3. Obtener un solo barbero por su ID
barberoCtrl.getBarbero = async (req, res) => {
    const barbero = await Barbero.findById(req.params.id);
    res.json(barbero);
};

// 4. Actualizar la información de un barbero
barberoCtrl.editBarbero = async (req, res) => {
    const { id } = req.params;
    const barbero = {
        nombre: req.body.nombre,
        especialidad: req.body.especialidad,
        telefono: req.body.telefono,
        estado: req.body.estado
    };
    await Barbero.findByIdAndUpdate(id, { $set: barbero }, { new: true });
    res.json({ status: 'Barbero actualizado con éxito' });
};

// 5. Eliminar un barbero
barberoCtrl.deleteBarbero = async (req, res) => {
    await Barbero.findByIdAndDelete(req.params.id);
    res.json({ status: 'Barbero eliminado con éxito' });
};

module.exports = barberoCtrl;