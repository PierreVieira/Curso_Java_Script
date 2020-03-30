function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco *(1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //Chamando a função diretamente
console.log(produto.getPreco()) //Chamando a função a partir de um objeto -> nesse caso produto será o this da função

const carro = { preco: 49990, desc: 0.2 }
//Usando call e apply
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro)) //Call necessita que o primeiro parâmetro seja o objeto de referência
console.log(getPreco.apply(global, [0.17, '$'])) //Apply necessita que o primeiro parâmetro seja o objeto de referência
// e os demais parâmetros sejam passados dentro de um array