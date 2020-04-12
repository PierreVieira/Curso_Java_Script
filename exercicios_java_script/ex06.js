juros_simples = function (c, t, i) {
    return (c * (1 + i * t)).toFixed(2)
}
juros_compostos = function (c, t, i) {
    return (c * (1 + i) ** t).toFixed(2)
}

console.log(juros_simples(1000, 5, 0.15))
console.log(juros_compostos(1000, 5, 0.15))