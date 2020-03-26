function teste(n) {
    if(n > 7)
        console.log(n)
    console.log('Final')
}

teste(6) //Final
teste(8) //8\nFinal

function teste2(num) {
    if (num > 7); { //cuidado com o ';' aqui no if
        console.log(num)
    }
}

teste2(6) //Printa 6 pcausa do ; no if
teste2(8)//8