let numtxt = window.prompt('Digite um número');
let titulo = document.getElementById('titulo');
let resultado = document.getElementById('resultado');
let num = Number(numtxt)

titulo.innerHTML += `${num}`
resultado.innerHTML = `
    Raiz quadrada: ${num ** 0.5} <br />
    ${num} é inteiro: ${Number.isInteger(num)} <br />
    É NaN: ${Number.isNaN(num)} <br />
    Arredondando para baixo: ${Math.floor(num)} <br />
    Arredondando para cima: ${Math.ceil(num)} <br />
    Arredondando para o mais próximo: ${Math.round(num)} <br />
    Com duas casas decimais: ${num.toFixed(2)}
`