function Carro(velocidade_maxima= 200, delta = 5){
    //atributo privado
    let velocidade_atual = 0

    //método público
    this.acelerar = function () {
        if (velocidade_atual + delta <= velocidade_maxima){
            velocidade_atual += delta
        } else {
            velocidade_atual = velocidade_maxima
        }
    }

    //método público
    this.getVelocidadeAtual = function () {
        return velocidade_atual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
console.log(typeof Carro)
console.log(typeof ferrari)