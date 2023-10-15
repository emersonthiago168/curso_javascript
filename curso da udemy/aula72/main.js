// defineProperty => Getter e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável ou não
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Não é um número');
                return;
            }

            estoquePrivado = valor;
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 550000;
console.log(p1.estoque)