function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${nome} está ${assunto}`
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa ('Emerson', 'Thiago', 1.80, 80);
const p2 = criaPessoa('Maria', 'Souza', 1.65, 60);
console.log(p1.imc());

