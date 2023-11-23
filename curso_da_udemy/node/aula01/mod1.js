class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Emerson';
const sobrenome = 'Thiago';

module.exports = {
    nome, sobrenome, Pessoa
}

// exports.outrCoisa = 'Outra coisa'; // Não funciona porque o objeto foi trocado no module.exports