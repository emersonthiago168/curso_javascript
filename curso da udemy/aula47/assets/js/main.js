function getTimeFromSeconds (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'})
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio () {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}

iniciar.addEventListener('click', function (event) {
    relogio.style.color = '#000'
    iniciaRelogio();
})

pausar.addEventListener('click', function (event) {
    relogio.style.color = '#f00'
    clearInterval(timer)
}
)

zerar.addEventListener('click', function (event) {
    relogio.style.color = '#000'
    clearInterval(timer);
    relogio.innerHTML = getTimeFromSeconds(0)
})