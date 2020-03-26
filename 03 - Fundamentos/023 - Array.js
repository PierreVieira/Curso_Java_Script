const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) //7.7
console.log(valores[4]) //undefined

valores[4] = 10
console.log(valores) //[ 7.7, 8.9, 6.3, 9.2 ]
valores[10] = 8
console.log(valores) //[ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 8 ]
console.log(valores.length) //11
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop()) //teste
delete valores[0] //delete para tirar um atributo do objeto
console.log(valores)

console.log(typeof valores) //object