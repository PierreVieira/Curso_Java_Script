function so_boa_noticia(nota) {
    if (nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

so_boa_noticia(8.1)
so_boa_noticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)