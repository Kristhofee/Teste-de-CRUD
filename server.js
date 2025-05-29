import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json(user)
})

app.put('/usuarios/:id', async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(200).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "Usuário deletado com sucesso" })

})

app.listen(3000)

// esse é um CRUD: (CREATE, READ, UPDATE, DELETE)

/*
1️⃣ API (Interface de Programação de Aplicações)
👉 É como um garçom em um restaurante.
Ele pega seu pedido, leva para a cozinha (sistema) e traz a comida (resposta).
📌 Ou seja, uma API permite que dois sistemas diferentes conversem entre si.


2️⃣ API REST (API baseada em REST)
👉 É um tipo de API que segue algumas regras específicas.
Ela usa URLs para acessar recursos, como pedir um prato no cardápio.
📌 Exemplo:


GET /usuarios → Lista todos os usuários


POST /usuarios → Cria um novo usuário


3️⃣ API RESTful (API que segue todas as regras do REST corretamente)
👉 Pense em um restaurante que segue todas as boas práticas de atendimento.
Uma API RESTful é uma API REST bem feita, organizada e padronizada.


📌 Resumindo:


API → Qualquer interface que conecta sistemas.


API REST → API que segue o estilo REST.


API RESTful → API REST bem estruturada e seguindo todas as boas práticas. 
*/