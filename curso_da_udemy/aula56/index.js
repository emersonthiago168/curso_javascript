// Factory function (função fábrica)
// Constructor function (função construtura)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'NADA.') {
            return `${this.nome} está falando sobre ${assunto}`;
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
p1.nomeCompleto = 'Eduardo Ribeiro';
console.log(p1.nomeCompleto);