let numtxt = window.prompt('Digite um número');
let titulo = document.getElementById('titulo');
let resultado = document.getElementById('resultado');
let num = Number(numtxt)

titulo.innerHTML += `${num}`
resultado.innerHTML = `
    <p>Raiz quadrada: ${num ** 0.5}</p>
    <p>${num} é inteiro: ${Number.isInteger(num)} </p>
    <p>É NaN: ${Number.isNaN(num)} <br /></p>
    <p>Arredondando para baixo: ${Math.floor(num)}</p>
    <p>Arredondando para cima: ${Math.ceil(num)} </p>
    <p>Arredondando para o mais próximo: ${Math.round(num)} </p>
    <p>Com duas casas decimais: ${num.toFixed(2)}</p>
`