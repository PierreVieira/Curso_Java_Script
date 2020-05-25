const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
module.exports.teste = 'teste'
axios.get(url).then(response => {
    const funcionarios = response.data
    const funcionarios_chineses = funcionarios.filter(funcionario => funcionario.pais === 'China')
    const mulheres = funcionarios_chineses.filter(funcionario => funcionario.genero === 'F')
    const menor_salario_mulher_chinesa = mulheres.reduce((anterior, atual) => anterior.salario < atual.salario ? anterior : atual)
    console.log(menor_salario_mulher_chinesa)
})
