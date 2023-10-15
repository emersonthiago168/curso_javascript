// Factory Functions / Constructor Functions / Classes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
};

const p1 = new Pessoa('Emerson', 'Thiago');
p1.nome = 'Outra coisa';
delete p1.nome;
console.log(p1);
