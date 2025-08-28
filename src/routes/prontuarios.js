import { Router } from "express";
import { prontuariosController } from "../controller/Prontuarios/ProntuariosController.js";
export const prontuariosRouter = Router()

prontuariosRouter.get('/prontuarios', prontuariosController.getTodosOsProntuarios);

prontuariosRouter.get("/prontuarios/:id", prontuariosController.getProntuarioPorId);

prontuariosRouter.post("/prontuarios", prontuariosController.criarProntuario);

prontuariosRouter.put("/prontuarios/:id", prontuariosController.atualizarProntuario);

prontuariosRouter.delete("/prontuarios/:id", prontuariosController.deletarProntuario);