/*
    function criaPessoa (nome, sobrenome, idade) {
        return { nome, sobrenome, idade };
    }

    const pessoa1 = criaPessoa ('Emerson', 'Thiago', 20);
    const pessoa2 = criaPessoa ('João', 'Vitor', 18);
    const pessoa3 = criaPessoa ('Maria', 'Oliveira', 70);
    const pessoa4 = criaPessoa ('Luiza', 'Vitoria', 70);
    const pessoa5 = criaPessoa ('Cesar', 'Pedro', 70);
*/


const pessoa1 = {
    nome: 'Emerson',
    sobrenome: 'Thiago',
    idade: 20,

    fala () {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
