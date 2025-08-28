import express from 'express';
import { usuariosRouter } from './routes/usuarios.js';
import { examesRouter } from './routes/exames.js';
import { pacientesRouter } from './routes/pacientes.js';
import { prontuariosRouter } from './routes/prontuarios.js';
import { consultasRouter } from './routes/consultas.js';

const app = express()
app.use(express.json())

app.use(usuariosRouter)
app.use(examesRouter)
app.use(pacientesRouter)
app.use(prontuariosRouter)
app.use(consultasRouter)

app.listen(3000, () => console.log("Api rodando"))