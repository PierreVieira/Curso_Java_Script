const resultado = nota => nota >= 7 ? 'Aprovado': 'Reprovado' //como só temos 1 parâmetro não precisa denotá-lo
// Se a nota for maior ou igual a 7 retorna 'Aprovado' senão retorna 'Reprovado'
console.log(resultado(7.1)) //Aprovado
console.log(resultado((6.7))) //Reprovado
