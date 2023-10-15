// Factory Functions / Constructor Functions / Classes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

const p1 = new Pessoa('Emerson', 'Thiago');
Object.freeze(p1);
p1.nome = 'Outra coisa';
console.log(p1);
