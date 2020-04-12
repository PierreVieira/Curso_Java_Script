function raizes_segundo_grau(a, b, c) {
    const delta = b ** 2 - 4 * a * c
    if (delta < 0){
        return 'Delta negativo não assume raízes reais'
    }
    const x1 = (-b + delta ** 0.5)/(4 * a * c)
    const x2 = (-b - delta ** 0.5)/(4 * a * c)
    return [parseFloat(x1.toFixed(2)), parseFloat(x2.toFixed(2))].sort()
}
console.log(raizes_segundo_grau(3, -5, 12))
console.log(raizes_segundo_grau(3, -5, -12))