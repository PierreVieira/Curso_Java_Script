console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
for (let i in aprovados.length){
    console.log(aprovados[i])
}

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')//Começa do indice do carlos e remove 2, nesse
// caso remove carlos e ana e depois adicioan o Elemento1 e Elemento2
console.log(aprovados)