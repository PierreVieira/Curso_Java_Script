const a = {name: 'Teste'} //a aponta para o endereço do objeto
console.log(a) //{ name: 'Teste' }
const b = a //b e a apontam para o mesmo lugar a partir de agora
b.name = 'Opa' //contante 'b' tem apontador alterado e por consequência 'a' também
console.log(b) //{ name: 'Opa' }
console.log(a) //{ name: 'Opa' }

let c = 3 //c é um tipo primitivo
let d = c //como o tipo é primitivo d recebe uma cópia de valor de c
d++
console.log(d) //4
console.log(c) //3

//  ~~~~~//~~~~
console.log('\nCONCEITO DE UNDEFINED') //Diferentemente de not defined, em undefined a variável é declarada normalmente
let valor //não inicializado
console.log(valor) //undefined
let valor2 = null //ausência de valor
console.log(valor2) //null

const produto = {}
console.log(produto.preco) //undefined -> produto é definido mas o preço não
console.log(!!produto.preco) //false

