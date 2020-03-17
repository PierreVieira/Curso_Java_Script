// Armazenando uma função em uma variável
const imprimir_soma = function (a, b) {
     console.log(a + b)
}
imprimir_soma(2, 5)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 5))

//retorno implícito (igual lambda function)
const subtracao = (a, b) => a -b
/* Em python
*  subtracao = lambda (a, b): a - b
* */
console.log(subtracao(5, 2))

const imprimir_msg = a => console.log(a)
imprimir_msg('LEGAL!!!')
