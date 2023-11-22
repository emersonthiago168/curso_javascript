const verdadeira = true;

// Let tem escopo de block { ... bloco }
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio'; // criando
    console.log(nome, nome2)
}