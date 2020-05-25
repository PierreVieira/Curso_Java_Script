require('./global')
console.log(MinhaApp.nome)

MinhaApp.nome = 'Alterando, se não quer que isso aconteça use o Object.freeze'
console.log(MinhaApp.nome)