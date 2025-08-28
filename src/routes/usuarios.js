import { Router } from "express";
import { usuariosController } from "../controller/Usuarios/UsuariosController.js";
export const usuariosRouter = Router()

usuariosRouter.get('/usuarios', usuariosController.getTodosOsUsuarios);

usuariosRouter.get("/usuarios/:id", usuariosController.getUsuarioPorId);

usuariosRouter.post("/usuarios", usuariosController.criarUsuario);

usuariosRouter.put("/usuarios/:id", usuariosController.atualizarUsuario);

usuariosRouter.delete("/usuarios/:id", usuariosController.deletarUsuario);