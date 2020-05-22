Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; ++i){
        acumulador = callback(acumulador, this[i], this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
console.log([1, 2, 3, 4, 5].reduce2(soma))