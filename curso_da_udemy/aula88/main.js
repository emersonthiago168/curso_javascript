function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') {
            reject('CAÍ NO ERRO');
            return;
        };

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Promise.all | Promise.race | Promise.resolve | Promise.reject

// const promises = [
//     esperaAi(1000, rand(1, 5)),
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
// ];

// Promise.all(promises)
//     .then(valor => console.log(valor))
//     .catch(erro => console.log(erro))

// Promise.race(promises)
//     .then(valor => console.log(valor))
//     .catch(erro => console.log(erro))

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => console.log('RESOLVE: ', dadosPagina))
    .catch( e => console.log('ERRO: ', e))