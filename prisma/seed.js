import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.usuario.createMany({
        data: [
            {
                nome: "Joao",
                email: "john@gmail.com",
                senha: "123",
                cargo: "Médico",
            }
        ],
    });

    await prisma.paciente.create({
        data: {
            nome: "João",
            sexo: "Masculino",
            data_nascimento: new Date("1980-12-11"),
            cpf: "958.512.235-95",
            telefone: 952556232,
            email: "joao@email.com",
            // consulta: {
            //     create: [
            //         {
            //             motivo: "Dor nas costas",
            //             data_consulta: new Date("2023-08-25"),
            //             observacoes: "ibuprofeno 3 vezes ao dia",
            //         }
            //     ]
            // },
            // exame: {
            //     create: [
            //         {
            //             tipo: "Densiometro",
            //             date: new Date("2023-08-25"),
            //             resultado: "deu ruim",
            //             link_arquivo: "url.com.br/exame.pdf",
            //             observacoes: "",
            //         }
            //     ]
            // }
        },
    });
}

main()
   .then(() => prisma.$disconnect())
   .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
});