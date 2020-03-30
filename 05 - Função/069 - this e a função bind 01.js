const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO
const falar_de_pessoa = pessoa.falar.bind(pessoa) //o this de falar agora é pessoa!
falar_de_pessoa()