function Pessoa(nome) {
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

pessoa = new Pessoa('Pierre')
pessoa.falar()