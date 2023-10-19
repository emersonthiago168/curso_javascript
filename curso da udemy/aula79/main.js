function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        falar() {
            console.log(`${this.nome} está falando.`)
        },
        comer() {
            console.log(`${this.nome} está comendo.`)
        },
        beber() {
            console.log(`${this.nome} está  bebendo.`)
        }
    };
}

const p1 = criaPessoa('Emerson', 'Thiago');
const p2 = criaPessoa('Luiz', 'Otavio');
console.log(p1);
console.log(p2);