function identifica_bissexto(ano) {
    if (ano % 4 !== 0 || (ano % 100 === 0 && ano % 400 !== 0)){
        return false
    }
    return true
}
anos = [2000, 2001, 2002, 2020, 2030, 2013, 1900]
for (ano of anos){
    if (identifica_bissexto(ano)){
        console.log(`O ano ${ano} é bissexto`)
    } else {
        console.log(`O ano ${ano} não é bissexto`)
    }
}