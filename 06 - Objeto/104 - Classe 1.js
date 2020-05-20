class Lancamento{
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamento){
        lancamentos.forEach(l => this.lancamentos.push())
    }

    sumario() {
        let valor_consolidado = 0
        this.lancamentos.forEach(l => {
            valor_consolidado += l.valor
        })
        return valor_consolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const conta_de_luz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, conta_de_luz)
console.log(contas.sumario())
