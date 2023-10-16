// Construtora => molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobernome = sobrenome;
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

