const EncargadoService = require('../services/encargadoService');

async function getAllEncargados(req, res) {
    try {
        const encargados = await EncargadoService.getAllEncargados();
        res.status(200).json(encargados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


async function getEncargado(req, res) {
    try {
        const { id, dpi } = req.query;

    let encargado;

    if (id) {
        encargado = await EncargadoService.getEncargadoById( id );
    } else if (dpi) {
        encargado = await EncargadoService.getEncargadoByDPI( dpi );
    } else {
        return res.status(400).json({ error: "Debe proporcionar id o dpi" });
    }

    if (!encargado) {
        return res.status(404).json({ error: "Encargado no encontrado" });
    }

    res.json(encargado);
    } catch (error) {
        console.error("Error al buscar el encargado:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}  

async function createEncargado(req, res) {
    try {
        const nuevoEncargado = await EncargadoService.createEncargado(req.body);
        res.status(201).json(nuevoEncargado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateEncargado(req, res) {
    try {
        const resultado = await EncargadoService.updateEncargado(req.params.id, req.body);
        if (resultado[0] > 0) {
        res.status(200).json({ message: 'Encargado actualizado correctamente' });
        } else {
        res.status(404).json({ message: 'Encargado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteEncargado(req, res) {
    try {
        const resultado = await EncargadoService.deleteEncargado(req.params.id);
        if (resultado) {
        res.status(200).json({ message: 'Encargado eliminado correctamente' });
        } else {
        res.status(404).json({ message: 'Encargado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllEncargados,
    getEncargado,
    createEncargado,
    updateEncargado,
    deleteEncargado
};
