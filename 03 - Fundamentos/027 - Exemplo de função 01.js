//Função sem retorno em js
function imprimir_soma(a, b) {
    console.log(a + b)
}
imprimir_soma(2, 3) //5
imprimir_soma(2) //NaN
imprimir_soma(2, 3, 4, 5, 6, 7, 8) //5
imprimir_soma() //NaN

function soma(a, b = 0) {
    return a + b
}
console.log(soma(2, 3)) //5
console.log(soma(2)) //2
console.log(soma(b=2, a=6)) //8
