let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

console.log(valores)

/*
    for (pos=0; e < valores.length; e++) {
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}