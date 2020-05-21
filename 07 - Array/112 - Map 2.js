const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
precos = carrinho.map(string => JSON.parse(string)).map(objeto => objeto.preco).map(valor => 'R$ ' + valor.toFixed(2))
console.log(precos)
