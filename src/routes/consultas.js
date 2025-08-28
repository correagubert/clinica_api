import { Router } from "express";
import { consultasController } from "../controller/Consultas/ConsultasController.js";
export const consultasRouter = Router()

consultasRouter.get('/consultas', consultasController.getTodasAsConsultas);

consultasRouter.get("/consultas/:id", consultasController.getConsultaPorId);

consultasRouter.post("/consultas", consultasController.criarConsulta);

consultasRouter.put("/consultas/:id", consultasController.atualizarConsulta);

consultasRouter.delete("/consultas/:id", consultasController.deletarConsulta);