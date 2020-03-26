//Desestruturação de arrays usa a notação de colchetes
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) //n6, assim como n5 seria undefined. Porém como n6 está setado com valor 0 isso não ocorre.

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
