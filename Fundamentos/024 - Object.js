const prod1 = {} //Criando um objeto vazio
prod1.nome = 'Celular Ultra Mega' //Criando um atributo dinamicamente
prod1.preco = 4998.90
prod1['Desconto Lega'] = 0.40 //evitar atributos com espaço
console.log(prod1)
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.9,
    obj:  {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod2)

//JSON
"{'nome': 'Pierre', 'idade': 19}"