const moduloA = require('../../../123-SistemaDeModulos/moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC') //Por estar usando o padrão index podemos simplesmente ignorar a importação de index.js
//Dessa forma o arquivo index.js é automaticamente procurado para a importação
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)