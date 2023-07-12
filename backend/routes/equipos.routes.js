import express from "express";

const router = express.Router();

import {obtenerEquipos,agregarEquipo, borrarEquipo, actualizarEquipo, getOneEquipo} from "../controllers/equipos.controllers.js";

router.get("/equipo/all", obtenerEquipos);
router.post("/equipo/add", agregarEquipo);
router.delete("/equipo/del/:id", borrarEquipo);
router.patch("/equipo/upd/:id", actualizarEquipo);
router.get("/equipo/get/:id", getOneEquipo);

export default router;