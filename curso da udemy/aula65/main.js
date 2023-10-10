// Filter, map, reduce

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter (valor, indice, array) /* posso mandar só o que for usar, como o valor. */ {
//     return valor > 10;
// }


const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);
