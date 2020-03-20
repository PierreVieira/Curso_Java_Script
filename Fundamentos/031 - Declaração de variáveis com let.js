// Variáveis declaradas com 'let' tem escopo global, de função e de bloco
let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero) //2
}
console.log('fora = ', numero) //1
