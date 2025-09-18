import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
  // await prisma.usuario.createMany({
  //   data: [
  //     { nome:"Joao", 
  //       email: "joao34@email.com", 
  //       senha: "123",
  //       cargo: "Médico"
  //     },
  //   ],
  // });

  // await prisma.paciente.create({
  //   data: {
  //     nome: "João",
  //     sexo: "Masculino",
  //     data_nascimento: new Date("1980-12-11"),
  //     cpf: "958.521.251.65",
  //     telefone: 952556232,
  //     email: "joao@email.com",
  //     // Consulta: {
  //     //   create: [
  //     //     {
  //     //       motivo: "Dor nas costas",
  //     //       data_consulta: new Date("2023-08-25"),
  //     //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //     //       medico_responsavel_id: 
  //     //     }
  //     //   ]
  //     // },
  //     // Exame: {
  //     //   create: [
  //     //     {
  //     //       tipo: "Densiometro",
  //     //       data_exame: new Date("2023-08-25"),
  //     //       resultado: "deu ruim",
  //     //       link_arquivo: "url.com.br/exame.pdf",
  //     //       observacoes: ""
  //     //     }
  //     //   ]
  //     // }
  //   },
  // });


  // await prisma.consulta.createMany({
  //   data: [
  //     {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     },
  //     {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     }, {
  //       motivo: "Dor nas costas",
  //       data_consulta: new Date("2023-08-25"),
  //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //       medico_responsavel_id: 1,
  //       paciente_id: 1
  //     },
  //   ]
  // });

  // await prisma.usuario.createMany({
  //   data: [
  //     {
  //       nome: "Alfredo Wagner",
  //       email: "alfredowagner@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     }, {
  //       nome: "Alfredo Wagner",
  //       email: "2@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "3@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "4@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "5@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "6@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "7@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "8@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "9@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "10@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "11@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "12@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "13@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "14@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "15@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "16@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "17@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "18@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "19@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "20@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "21@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "22@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "23@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "24@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "25@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "26@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "27@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "28@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "29@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     },{
  //       nome: "Alfredo Wagner",
  //       email: "30@hotmail.com",
  //       senha: "123456",
  //       cargo: "Médico"
  //     }
  //   ]
  // });

  // await prisma.prontuario.createMany({
  //   data: [
  //     {
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     },{
  //       descricao: "Descrição",
  //       data: new Date("2023-08-25"),
  //       medico_responsavel_id: 1,
  //       paciente_id: 1,
  //     }
  //   ]
  // });

  // await prisma.paciente.createMany({
  //   data: [
  //     {
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     },{
  //       nome: "Mano",
  //       cpf: "12345678900",
  //       telefone: "48999998888",
  //       email: "email@email.com",
  //       data_nascimento: new Date("2023-08-25"),
  //       sexo: "Masculino",
  //       responsavel: "Marcos"
  //     }
  //   ]
  // });

  // await prisma.exame.createMany({
  //   data: [
  //     {
  //       tipo_exame: "Médico",
  //       resultado: "Voltou da morte",
  //       data_exame: new Date("2023-08-25"),
  //       link_arquivo: "https://neopets.com",
  //       observacoes: "Comprar sabão no mercado",
  //       paciente_id: 1
  //     },
  //   ]
  // });
}



main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

