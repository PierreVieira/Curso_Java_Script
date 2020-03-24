function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 !== trabalho2
    const manterSaudavel = !comprarSorvete //oprador unário
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //Não precisa criar a chave/valor nesse caso
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))