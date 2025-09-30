import bcrypt from "bcrypt";
import { prismaClient } from "../../prisma/prisma.ts";
import {
    signAccessToken,
    signRefreshToken,
    verifyRefresh,
} from "../utils/jwt.ts";


class AuthController {
    constructor() { }

    async register(
        req,
        res
    ) {
        try {
            const { email, senha, nome } = req.body;
            // Validação básica
            if (!email || !senha) {
                return res.status(400).json({ error: "Email e senha são obrigatórios" });
            }
            // Verificar se usuário já existe
            const existingUsuario = await prismaClient.usuario.findUnique({
                where: { email },
            });
            if (existingUsuario) {
                return res.status(409).json({ error: "Usuário já existe" });
            }
            // Hash da senha com bcrypt
            const saltRounds = 10;
            const hashedsenha = await bcrypt.hash(senha, saltRounds);
            // Criar usuário no banco de dados
            const usuario = await prismaClient.usuario.create({
                data: { email, senha: hashedsenha, nome: nome || null },
                select: {
                    id: true,
                    email: true,
                 nome: true,
                },
            });
            return res.status(201).json(usuario);
        } catch (error) {
            console.error("Erro no registro:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
        return res.status(400).send("Not Found");
    };

    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const usuario = await prismaClient.usuario.findUnique({ where: { email } }); // Verificar se usuário existe e senha está correta
            if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
                return res.status(401).json({ error: "Credenciais inválidas" });
            }
            // Gerar access token (curta duração)
            const accessToken = signAccessToken({
                usuarioId: usuario.id,
                email: usuario.email,
             nome: usuario.nome,
            });

            // Gerar refresh token (longa duração)
            const refreshToken = signRefreshToken({
                usuarioId: usuario.id,
                email: usuario.email,
             nome: usuario.nome,
            });
            // Armazenar refresh token no banco de dados
            const expiresAt = new Date();
            expiresAt.setDate(expiresAt.getDate() + 7);
            console.log(refreshToken)
            await prismaClient.token.create({
                data: {
                    token: refreshToken,
                    type: "refresh",
                    usuarioId: usuario.id,
                    expiresAt,
                },
            });
            res.status(200).json({
                accessToken,
                refreshToken,
                usuario: {
                    id: usuario.id,
                    email: usuario.email,
                 nome: usuario.nome,
                },
            });
        } catch (error) {
            console.error("Erro no login:", error);
            res.status(500).json({ error: "Erro interno do servidor" });
        }
        return res;
    };

    // desabilitado pq o professor vai fazer junto
    // async refresh(
    //     req,
    //     res
    // ) {
    //     const { refreshToken } = req.body;
    //     const storedRefreshToken = await prismaClient.token.findFirst({
    //         where: { token: refreshToken },
    //     });
    //     if (
    //         !storedRefreshToken ||
    //         storedRefreshToken.revoked ||
    //         storedRefreshToken.expiresAt < new Date()
    //     )
    //         return res.status(401).json({ error: "invalid refresh token" });

    //     try {
    //         const payload = verifyRefresh(refreshToken);
    //         const accessToken = signAccessToken({
    //             usuarioId: payload.id,
    //             email: payload.email,
    //             nome: payload.nome,
    //         });
    //         return res.json({ accessToken });
    //     } catch {
    //         return res.status(401).json({ error: "invalid refresh token" });
    //     }
    // };

    async logout(
        req,
        res
    ) {
        const { refreshToken } = req.body;
        try {
            const storedRefreshToken = await prismaClient.token.findFirst({
                where: { token: refreshToken },
            });
            if (
                !storedRefreshToken ||
                storedRefreshToken.revoked ||
                storedRefreshToken.expiresAt < new Date()
            )
                return res.status(401).json({ error: "invalid refresh token" });

            await prismaClient.token.updateMany({
                where: { id: storedRefreshToken?.id ?? 0 },
                data: { revoked: true },
            });
        } catch (error) {
            res.status(400).json(error)
        }

        return res.status(200).json("Usuário deslogado!");

    }
}


export const authController = new AuthController();