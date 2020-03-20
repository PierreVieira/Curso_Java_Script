// Variáveis declaradas com 'var' tem escopo global e de função
{
    {
        {
            {
                var sera = 'será?'
            }
        }
    }
}
console.log(sera) //A variável é visível fora do bloco
function teste() {
    var local = 123
    console.log(local)
}
teste()