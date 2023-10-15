// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // 
        configurable: false,
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);