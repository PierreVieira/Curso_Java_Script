function condicao_do_dia(dia) {
    //Primeiro dia do mês é domingo e dia 7 é sábado
    if (dia < 1 || dia > 30){
        return 'Dia inválido'
    }
    else if (dia === 1 || dia > 7 && (dia + 7) % 7 === 1){
        return 'Domingo não é um dia útil'
    }
    else if (dia === 7 || dia > 7 && (dia + 7) % 7 === 0) {
        return 'Sábado não é um dia útil'
    }
    return 'Dia útil'
}
console.log(condicao_do_dia(5))
console.log(condicao_do_dia(15))
console.log(condicao_do_dia(21))
console.log(condicao_do_dia(31))