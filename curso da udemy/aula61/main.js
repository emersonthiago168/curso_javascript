function* geradora1() {
    // Código qualquer ....
    yield 'Valor 1';
    // Código qualquer ....
    yield 'Valor 2';
    // Código qualquer ....
    yield 'Valor 3';
}

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++
    }
}

function 