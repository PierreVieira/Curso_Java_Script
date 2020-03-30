console.log(soma(3, 4))

// function declaration
function soma(x, y) { // O interpretador já tem carregado essa função antes de executar o código.
    return x + y
}

//function expression
const sub = function (x, y) { // O interpretador só interpreta essa função quando ela é chamada
    return x - y
}

//named function expression
const mult = function mult(x, y) { // O interpretador só interpreta essa função quando ela é chamada
    return x * y
}
