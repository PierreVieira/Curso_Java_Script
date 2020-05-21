Array.prototype.filter2 = function (callback) {
    const new_array = []
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            new_array.push(this[i])
        }
    }
    return new_array
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: false},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: true}
]

console.log(produtos.filter2(function (p) {
    return p.preco > 2000
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))
