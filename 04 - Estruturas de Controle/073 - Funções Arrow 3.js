let compara_com_this = function (param) {
    console.log(this === param)
}

compara_com_this(global) // true; no contaxto do node, global é estritamente igual ao this
const obj = {}
compara_com_this = compara_com_this.bind(obj) // O this agora aponta para obj
compara_com_this(global) // false

let compara_com_this_arrow = param => console.log(this === param)
compara_com_this_arrow(global) // false

compara_com_this_arrow = compara_com_this_arrow.bind(obj) //fodac o bind, arrow prevalece
compara_com_this_arrow(obj) // false