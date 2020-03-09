let isAtivo = false
console.log(isAtivo) //false
isAtivo = true
console.log(isAtivo) //true

isAtivo = 1
console.log(!!isAtivo) //true - as duas exclamações transformam em true/false
console.log('os verdadeiros...')
console.log(!!-3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 0)) //Testa se a atribuição funcionou


console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido') //Como o primeiro valor denota false, ele printa 'Desconhecido'

nome = 'Pierre'
console.log(nome || 'Deconhecido') //Como o primeiro valor denota true, ele printa somente 'Pierre'
