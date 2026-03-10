const express = require("express");
const router = express.Router();
const pacientesService = require("../model/pacientesService");


// Rota para listar todos os pacientes
router.get("/pacientes", async (req, res) => {
    try {
        const pacientes = await pacientesService.listarPacientes();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

// Rota para listar pacientes de um nutricionista específico
router.get("/:nutricionistaId/pacientes", async (req, res) => {
    const { nutricionistaId } = req.params;
    try {
        const pacientes = await pacientesService.listarPacientesPorNutricionista(nutricionistaId);
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

module.exports = router;