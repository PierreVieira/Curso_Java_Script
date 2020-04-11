const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i in notas){
    console.log(i)
}
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}
for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa.atributo}`)
}

function teste(stirng){
    let valores = stirng.split(' ').map(x => parseFloat(x))
    console.log(valores)
    for (let v of valores){
        console.log(v)
    }
}

teste('10 20 20 8 25 3 0 30 1')
