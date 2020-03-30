const valor = 'Global'

function minhaFuncao() {
    console.log(valor) //pega o valor global
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()