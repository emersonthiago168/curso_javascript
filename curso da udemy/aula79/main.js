function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome
    };
}

const p1 = criaPessoa('Emerson', 'Thiago');
console.log(p1)