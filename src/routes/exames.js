import { Router } from "express";
import { exameController } from "../controller/Exames/ExamesController.js";

export const exameRouter = Router()

exameRouter.get("/exames", exameController.pegarTodosExames)
exameRouter.get("/exames/:id", exameController.pegarExamePorId)
exameRouter.post("/exames", exameController.criarExame)
exameRouter.put("/exames/:id", exameController.atualizarExame)
exameRouter.delete("/exames/:id", exameController.deletarExame)