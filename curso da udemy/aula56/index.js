// Factory function (função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        nomeCompleto() {
            return `${nome} ${sobrenome}`
        },

        fala(assunto) {
            return `${nome} está ${assunto}`
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Emerson', 'Thiago', 1.80, 80);
console.log(p1.nomeCompleto());

