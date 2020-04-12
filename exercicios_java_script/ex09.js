function nova_nota(nota) {
    if (nota > 40){
        while (nota % 5 !== 0){
            nota++
        }
    }
    else {
        let nota_aux = nota
        while (nota_aux % 5 !== 0){
            nota_aux++
        }
        if(nota_aux === 40){
            return nota_aux
        }
    }
    return nota
}
console.log('Nota antiga = 40\nNota nova = '+nova_nota(84)+'\n')
console.log('Nota antiga = 29\nNota nova = '+nova_nota(29)+'\n')
console.log('Nota antiga = 38\nNota nova = '+nova_nota(38)+'\n')