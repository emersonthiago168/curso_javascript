// reduce

// Some todos os números (reduce)
// const numeros1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros1.reduce((acumulador, valor, indice, array) => {
//     acumulador += valor;
//     return acumulador;
// }, 0);
// console.log(total);

// // Retorne um array com os pares (filter)
// const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const pares = numeros2.reduce((acumulador, valor, indice, array) => {
//     if (valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);
// console.log(pares);

// // Retorne um array com o dobro dos valores (map)
// const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const dobro = numeros3.reduce((acumulador, valor, indice, array) => {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);
// console.log(dobro);

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 47}
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha)