const porta = 3002

const express = require('express')
const app = express()
const bancoDeDados = require('./banco_de_dados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) //sempre uma requisição for feita no servidor usando express, ele vai obrigatoriamente passar por esse middleware e se no corpo da requisição tiver um padrão urlencoded, o middleware vai ser aplicado: vai fazer um parser da requisição convertendo ela para objeto

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProdutos(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})