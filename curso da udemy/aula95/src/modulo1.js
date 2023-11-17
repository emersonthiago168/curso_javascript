export const nome = 'Emerson';
export const sobrenome = 'Thiago';
export const idade = 20;
const cpf = '23123255555'

export function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}