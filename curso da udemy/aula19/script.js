/* 
    Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

    Referência (mutável) - array, object, function = Valores passados por referência
*/
/*
    let a = 'A';
    let b = a; // cópia
    a = 'Outra coisa'
    console.log(a, b)
*/
/*
    let a = [1, 2, 3];
    let b = [...a]; // copiado
    let c = b;

    a.push(4);
    console.log(a, b);

    b.pop();
    console.log(a, b); 

    a.push('Luiz');
    console.log(c);
*/

const a = {
    nome: 'Emerson',
    sobrenome: 'Thiago'
};
const b = {...a}; // copiado

a.nome = 'Pedro';
console.log(b);
console.log(a);

