const escola = 'Cod3r'

//CharAt
console.log(escola.charAt(4)) //r
console.log(escola.charAt(5)) //Não dá erro

//charCodeAt
console.log(escola.charCodeAt(3)) //51 (dá o ASCII do caractere informado)

//substring
console.log(escola.substring(1)) //Pega todos os caracteres a partir do primeiro (od3r)
console.log(escola.substring(0, 3)) //Pega todos os caracteres de 0 até 2 em intervalo fechado (Cod)

//concat
console.log('Escola '.concat(escola).concat('!')) //Escola Cod3r!
console.log('Escola ' + escola + '!') //Escola Cod3r!

//replace
console.log(escola.replace('3', 'e')) //Coder

//split
console.log('Ana Maria Pedro'.split(' ')) //[ 'Ana', 'Maria', 'Pedro' ]

