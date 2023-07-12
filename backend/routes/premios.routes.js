import express from "express";

const router = express.Router();

import {obtenerPremios,agregarPremio, borrarPremio, actualizarPremio, getOnePremio} from "../controllers/premios.controllers.js";

router.get("/premio/all", obtenerPremios);
router.post("/premio/add", agregarPremio);
router.delete("/premio/del/:id", borrarPremio);
router.patch("/premio/upd/:id", actualizarPremio);
router.get("/premio/get/:id", getOnePremio);

export default router;