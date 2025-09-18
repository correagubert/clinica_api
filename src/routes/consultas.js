import { Router } from "express";
import { consultaController } from "../controller/Consultas/ConsultasController.js";

export const consultasRouter = Router();

consultasRouter.get("/consultas", consultaController.pegarTodasConsultas)
consultasRouter.get("/consultas/:id", consultaController.pegarConsultaPorId)
consultasRouter.post("/consultas", consultaController.criarConsulta)
consultasRouter.put("/consultas", consultaController.atualizarConsulta)
consultasRouter.delete("/consultas/:id", consultaController.deletarConsulta)