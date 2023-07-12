import express from "express";

const router = express.Router();

import {obtenerCiclistas,agregarCiclista, borrarCiclista, actualizarCiclista, getOneCiclista} from "../controllers/ciclistas.controllers.js";

router.get("/ciclista/all", obtenerCiclistas);
router.post("/ciclista/add", agregarCiclista);
router.delete("/ciclista/del/:id", borrarCiclista);
router.patch("/ciclista/upd/:id", actualizarCiclista);
router.get("/ciclista/get/:id", getOneCiclista);

export default router;