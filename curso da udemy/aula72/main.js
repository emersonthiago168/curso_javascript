// defineProperty => Getter e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável ou não
        
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);