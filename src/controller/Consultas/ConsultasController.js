import { prismaClient } from "../../../prisma/prisma.js";

class ConsultasController {
    constructor() { }
    async getTodasAsConsultas(_, res) {
        try {
            const consultas = await prismaClient.consulta.findMany();
            return response.json(consultas)
        }
        catch (e) {
            console.log(e)
        }
    }

    async getConsultaPorId(_, res) {
        try {
            const consultas = await prismaClient.consulta.findUnique({
                where: {
                    id: Number(request.params.id)
                }
            })
            if (!consultas) return response.status(404).send("Consulta não existe!")
            return response.json(consultas)
        }
        catch (e) {
            console.log(e)
        }
    }

    async criarConsulta(_, res) {
        try {
            const { body } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "motivo" &&
                    key !== "data_consulta" &&
                    key !== "observacoes" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id" &&
                    key !== "paciente"
                ) return res.status(404).send("Colunas não existentes")
            }
            const consultas = await prismaClient.consulta.create({
                data: {
                    ...body,
                    data_consulta: new Date(body.data_consulta)
                },
            })
            return res.status(201).json(consultas)
        } catch (error) {
            console.error(error)
        }
    }

    async atualizarConsulta(_, res) {
        try {
            const { body, params } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "motivo" &&
                    key !== "data_consulta" &&
                    key !== "observacoes" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id" &&
                    key !== "paciente"
                ) return res.status(404).send("Colunas não existentes")
            }
            await prismaClient.consulta.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })
            const consultaAtualizada = await prismaClient.consulta.findUnique({
                where: {
                    id: Number(params.id)
                }
            })

            return res.status(201).json({
                message: "Consulta atualizada!",
                data: consultaAtualizada
            })

        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Usuário não existe no banco")
            }

            if (error.code === "P2002") {
                res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
            }
        }
    }

    async deletarConsulta(_, res) {
        const { params } = req
        try {
            const consultaDeletada = await prismaClient.consulta.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "Consulta deletada!",
                data: consultaDeletada
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Paciente não existe no banco")
            }
        }
    }
}

export const consultasController = new ConsultasController();