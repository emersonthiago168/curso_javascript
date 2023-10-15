// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar ou não
        configurable: true, // configurável ou não
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for (let key in p1) {
    console.log(key);
}