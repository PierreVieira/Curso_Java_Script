const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, volsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

situacao = alunos.map(aluno => aluno.bolsista)

// Desafio 1: Todos os alunos são bolsistas?
const resultado1 = situacao.reduce(function (acumulador, valor) {
    return acumulador && valor;
})

// Desafio 2: Algum aluno é bolsista?
const resultado2 = situacao.reduce((acumulador, valor) => acumulador || valor)
console.log(resultado1, resultado2)
