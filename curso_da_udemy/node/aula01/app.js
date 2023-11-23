const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

// axios('https://pokeapi.co/api/v2/pokemon')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));

const p1 = new Pessoa('Emerson');
console.log(p1);
console.log(mod1);