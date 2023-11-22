const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);

// Utilizado como arguments e possível usar em function expression
const contaDois = (...args) => {
    console.log(args);
};
conta('+', 1, 20, 30, 40, 50);