const objeto_pessoa = {
    nome: 'Pierre',
    idade: 19,
    falar(){
        console.log('Oi, meu nome é '+this.nome)
    }
}

objeto_pessoa.falar()