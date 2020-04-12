function retorna_codicao(string) {
    switch (string) {
        case 'maçã': return 'Não vendemos esta fruta aqui'
        case 'kiwi': return 'Estamos com escassez de kiwis'
        case 'melancia': return 'Aqui está, são 3 reais o quilo'
        default: return 'ERRO'
    }
}
console.log(retorna_codicao('maçã'))
console.log(retorna_codicao('kiwi'))
console.log(retorna_codicao('melancia'))
console.log(retorna_codicao('banana'))