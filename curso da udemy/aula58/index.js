// Constructor functions => objetos
// Factory functions => objetos
// Construtora => Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privadas
    const ID = 123456;
    const metodoInterno = () => {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome}: sou um método.`);
    };
}

const p1 = new Pessoa('Emerson', 'Thiago');
const p2 = new Pessoa('Maria', 'Oliveira');

p2.metodo();
