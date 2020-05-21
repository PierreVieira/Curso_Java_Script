Array.prototype.map2 = function (callback) {
    const new_array = []
    for (let i = 0; i < this.length; ++i){
        new_array.push(callback(this[i], i, this))
    }
    return new_array
}

console.log([1, 2, 3, 4].map2(e => 2*e))