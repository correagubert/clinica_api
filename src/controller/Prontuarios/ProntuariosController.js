import { prismaClient } from "../../../prisma/prisma.js";

class ProntuariosController {
    constructor() { }
    async getTodosOsProntuarios(_, res) {
        try {
            const prontuarios = await prismaClient.prontuario.findMany();
            return response.json(prontuarios)
        }
        catch (e) {
            console.log(e)
        }
    }

    async getProntuarioPorId(_, res) {
        try {
            const prontuarios = await prismaClient.prontuario.findUnique({
                where: {
                    id: Number(request.params.id)
                }
            })
            if (!prontuarios) return response.status(404).send("Prontuario não existe!")
            return response.json(prontuarios)
        }
        catch (e) {
            console.log(e)
        }
    }

    async criarProntuario(_, res) {
        try {
            const { body } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "descricao" &&
                    key !== "data" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id" &&
                    key !== "paciente" &&
                    key !== "usuario"
                ) return res.status(404).send("Colunas não existentes")
            }
            const prontuarios = await prismaClient.prontuario.create({
                data: {
                    ...body,
                    data: new Date(body.data)
                },
            })
            return res.status(201).json(prontuarios)
        } catch (error) {
            console.error(error)
        }
    }

    async atualizarProntuario(_, res) {
        try {
            const { body, params } = req
            if (body.nome || body.cargo || body.email || body.senha) {
                await prismaClient.usuario.update({
                    where: { id: Number(params.id) },
                    data: {
                        ...body
                    },
                })

                const usuarioAtualizado = await prismaClient.usuario.findUnique({
                    where: {
                        id: Number(params.id)
                    }
                })

                res.status(201).json({
                    message: "Usuário atualizado!",
                    data: usuarioAtualizado
                })
            } else {
                res.status(404).send("Atributos enviados não condizem com o schema")
            }
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Usuário não existe no banco")
            }
            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
            }
        }
    }

    async deletarProntuario(_, res) {
        const { params } = req
        try {
            const prontuarioDeletado = await prismaClient.prontuario.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "prontuario deletada!",
                data: prontuarioDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Paciente não existe no banco")
            }
        }
    }
}

export const prontuariosController = new ProntuariosController();