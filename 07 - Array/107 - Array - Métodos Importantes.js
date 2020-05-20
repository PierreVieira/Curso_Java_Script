const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove e retorna o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Insere na última posição do array um novo elemento
console.log(pilotos)

pilotos.shift() //Remove um elemento do ínicio do array
console.log(pilotos)

pilotos.unshift('Hamilton') //Insere um novo elemento no ínicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const alguns_pilotos1 = pilotos.slice(2) //novo array
console.log(alguns_pilotos1)

const alguns_pilotos2 = pilotos.slice(1, 4)
console.log(alguns_pilotos2)