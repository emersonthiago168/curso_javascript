// Factory Functions / Constructor Functions / Classes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

const p1 = new Pessoa('Emerson', 'Thiago');
console.log(p1);
