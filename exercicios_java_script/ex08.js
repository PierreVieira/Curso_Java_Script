function teste(stirng){
    const valores = stirng.split(' ').map(x => parseFloat(x))
    const pior = Math.min.apply(Math, valores)
    const melhor = Math.max.apply(Math, valores)
    let qtde_vezes_maior = 0
    for (let v of valores){
        if (v === melhor){
            qtde_vezes_maior++
        }
    }
    return [pior, qtde_vezes_maior]
}

retorno = teste('10 20 20 8 25 3 0 30 1 30')
console.log(`O pior resultado foi ${retorno[0]}\nO melhor resultado apareceu ${retorno[1]} vezes.`)
