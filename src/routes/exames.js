import { Router } from "express";
import { examesController } from "../controller/Exames/ExamesController.js";
export const examesRouter = Router()

examesRouter.get('/exames', examesController.getTodosOsExames);

examesRouter.get("/exames/:id", examesController.getExamePorId);

examesRouter.post("/exames", examesController.criarExame);

examesRouter.put("/exames/:id", examesController.atualizarExame);

examesRouter.delete("/exames/:id", examesController.deletarExame);