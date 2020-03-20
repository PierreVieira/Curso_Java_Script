// Recurso novo do ES2015
//Desestruturação de objetos usa a notação de chaves
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa  //pega o nome e idade da pessoa
console.log(nome, idade) //Ana 5

const {nome: n, idade: i} = pessoa // pega o nome e idade da pessoa e atribui às variáveis nome e idade respectivamente
console.log(n, i) //Ana 5

const {sobrenome, bem_humorado = true} = pessoa //se não tiver o bem_humorado ele seta pra true
console.log(sobrenome, bem_humorado) //undefined, true

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)