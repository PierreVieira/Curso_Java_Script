function operacoes(a, b){
    const [soma, subtracao, multiplicacao, divisao] = [a + b, a - b, a*b, a/b]
    console.log(`${a} + ${b} = ${soma}\n${a} - ${b} = ${subtracao}\n${a} x ${b} = ${multiplicacao}\n${a} / ${b} = ${divisao}\n`)
}

operacoes(6, 3)
operacoes(7.1, 9.4)
