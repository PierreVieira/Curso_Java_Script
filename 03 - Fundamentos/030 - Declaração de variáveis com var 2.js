// Variáveis declaradas com 'var' tem escopo global e de função
var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero) //2
}
console.log('fora = ', numero) //2
