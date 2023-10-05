function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${nome} está ${assunto}`
        },
        altura,
        peso
    };
}

const p1 = criaPessoa ('Emerson', 'Thiago');


