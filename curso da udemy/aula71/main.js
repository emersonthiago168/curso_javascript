// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar ou não
        configurable: false, // configurável ou não
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 60000;
delete p1.estoque;
console.log(p1);