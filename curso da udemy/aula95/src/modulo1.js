export const nome = 'João';
export const sobrenome = 'Pedro';
export const idade = 20;
export const cpf = '23123255555'

export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

