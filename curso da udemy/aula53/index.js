// Escopo Global
function retornaFuncao(nome) {
    return function () {
        return nome
    }
};

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João')
console.dir
console.log(funcao(), funcao2());