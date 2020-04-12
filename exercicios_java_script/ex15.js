function retorna_mensagem_de_venda(mensagem_de_compra) {
    switch (mensagem_de_compra) {
        case 'hatch': return 'Compra efetuada com sucesso'
        case 'sedans': case 'motocilcetas': case 'caminhonetes': return 'Tem certeza que não prefere este modelo?'
        default: return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(retorna_mensagem_de_venda('motocilcetas'))
console.log(retorna_mensagem_de_venda('rachadores'))