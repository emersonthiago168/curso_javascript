// Construtora => molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `ORIGINAL: ${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.nomeCompleto = function () {
    return `proto ${this.nome} ${this.sobrenome}`; 
}

// instância
const pessoa1 = new Pessoa('Emerson', 'T.'); // <= Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <= Pessoa = Função construtora
const data = new Date(); // <= Date = Função construtora

console.dir(pessoa1);
console.dir(data);