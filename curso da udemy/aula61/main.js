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

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
}

const g4 = geradora4();


function* geradora5() {
    
}