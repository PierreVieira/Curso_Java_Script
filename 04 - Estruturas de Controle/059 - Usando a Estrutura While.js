function get_inteiro_aleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


let opcao;
while (opcao != -1) {
    opcao = get_inteiro_aleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Até a próxima!')
