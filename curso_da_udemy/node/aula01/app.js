const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

axios('https://pokeapi.co/api/v2/pokemon')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));