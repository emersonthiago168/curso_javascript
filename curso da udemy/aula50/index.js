// argumentos que sustenta todos os argumentos enviados (com a palavra function)
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c)
}
funcao(2, undefined, 20);