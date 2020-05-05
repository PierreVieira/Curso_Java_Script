const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0)

const carro = {
    vel_atual: 0,
    vel_max: 200,
    acelerar_mais(delta){
        if (this.vel_atual + delta <= this.vel_max){
            this.vel_atual += delta
        }
        else {
            this.vel_atual = this.vel_max
        }
    },
    status() {
        return `${this.vel_atual} km/h de ${this.vel_max} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    vel_max: 324 //Shadowing: sombreia a velocidade do objeto carro se ele tiver como protótipo o carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro); //Carro passa a ser protótipo de ferrari
Object.setPrototypeOf(volvo, carro); //Carro passa a ser protótipo de volvo

console.log(ferrari)
console.log(volvo)