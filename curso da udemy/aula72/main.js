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
                throw new TypeError('Não é um número');
            }

            estoquePrivado = valor;
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 600;
console.log(p1.estoque)



function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}

const produto2 = criaProduto('Calça');
produto2.nome = 'Qualquer coisa';
console.log(produto2.nome)
