function tipo_triangulo(lado1, lado2, lado3) {
    if(lado1 > lado2 + lado3 || lado2 > lado1 + lado3 || lado3 > lado1 + lado2) {
        return 'Não forma triângulo'
    }
    if (lado1 === lado2 && lado2 === lado3){
        return 'Triângulo Equilátero'
    }
    else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
        return 'Triângulo Escalero'
    }
    return 'Triângulo Isóceles'
}

console.log(tipo_triangulo(1, 2, 3))
console.log(tipo_triangulo(1, 1, 2))
console.log(tipo_triangulo(3, 3, 3))
console.log(tipo_triangulo(1, 1, 3))