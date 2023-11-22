/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é 25.925925
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura ** 2);
let anoNascimento = 2023 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)