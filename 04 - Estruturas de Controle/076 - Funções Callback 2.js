function encontrar_notas_baixas() {
    let notas_baixas = []
    for (let i in notas){
        if (notas[i] < 6){
            notas_baixas.push(notas[i])
        }
    }
    return notas_baixas
}

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notas_baixas = encontrar_notas_baixas()

console.log(notas_baixas) // [ 5.2, 3.6 ]

// Com callback
notas_baixas = notas.filter(nota => nota < 6)
console.log(notas_baixas) // [ 5.2, 3.6 ]