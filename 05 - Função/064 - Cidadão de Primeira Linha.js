// Função em JS é First-Class Object (Citzens)
// Higher-order function

// criar de forma litral
function fun1() {
    return 1
}

// Armazenar em uma variável
const fun2 = function () {
    return 2
}

// Armazenar em um array
const array = [function (a, b) {
    return a + b
}, fun1(), fun2()]
console.log(array[0](2, 3))
console.log(array[1])
console.log(array[2])

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Opa'
}
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () {
    console.log('Executando...')
})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cinco_mais = soma(2, 3)
cinco_mais(4)
