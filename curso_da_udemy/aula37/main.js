const nome = ['Emerson', 'Thiago', 'João'];


// For clássico - Geralmente com iteráveis (arrays ou string)
// For in - Retorna o índice ou chave (string, array ou objeto)
// For of - Retorna o valor em si (iteráveis, arrays ou stringcurso da udemy/modelo/assets curso da udemy/modelo/index.html)

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('#####')

for (let i in nome) {
    console.log(nome[i]);
}

console.log('#####')

for (let valor of nome) {
    console.log(valor);
}

console.log('#####')

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})