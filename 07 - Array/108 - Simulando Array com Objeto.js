const quase_array = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}
console.log(quase_array)
Object.defineProperty(quase_array, 'toString', {
    value: function () {
        return Object.values(this)
    },
    enumerable: false
})
console.log(quase_array[0])
const meu_array = ['Rafael', 'Ana', 'Bia']
console.log(meu_array, quase_array.toString())