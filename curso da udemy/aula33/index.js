const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { endereco: {rua, numero}, endereco } = pessoa;
console.log(rua, numero, endereco);