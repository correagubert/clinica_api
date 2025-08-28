import { Router } from "express";
import { pacientesController } from "../controller/Pacientes/PacientesController.js";
export const pacientesRouter = Router()

pacientesRouter.get('/pacientes', pacientesController.getTodosOsPacientes);

pacientesRouter.get("/pacientes/:id", pacientesController.getPacientePorId);

pacientesRouter.post("/pacientes", pacientesController.criarPaciente);

pacientesRouter.put("/pacientes/:id", pacientesController.atualizarPaciente);

pacientesRouter.delete("/pacientes/:id", pacientesController.deletarPaciente);