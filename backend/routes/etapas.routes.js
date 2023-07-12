import express from "express";

const router = express.Router();

import {obtenerEtapas,agregarEtapa, borrarEtapa, actualizarEtapa, getOneEtapa} from "../controllers/etapas.controllers.js";

router.get("/etapa/all", obtenerEtapas);
router.post("/etapa/add", agregarEtapa);
router.delete("/etapa/del/:id", borrarEtapa);
router.patch("/etapa/upd/:id", actualizarEtapa);
router.get("/etapa/get/:id", getOneEtapa);

export default router;