class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }
}

const p1 = new Pessoa('Emerson', 'Thiago');
const p2 = new Pessoa('Maria', 'Silva');
const p3 = new Pessoa('João', 'Ribeiro');
const p4 = new Pessoa('Pedro', 'Henrique');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);