// Constructor functions => objetos
// Factory functions => objetos
// Construtora => Pessoa (new)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome}: sou um método.`)
    }
}

const p1 = new Pessoa('Emerson', 'Thiago');
const p2 = new Pessoa('Maria', 'Oliveira');

p2.metodo();
