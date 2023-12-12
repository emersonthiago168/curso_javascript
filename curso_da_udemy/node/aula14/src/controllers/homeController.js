const HomeModel = require('../models/HomeModel.js');

HomeModel.create({
    titulo: 'Outra coisa qualquer',
    descricao: 'Outra descrição'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res, next) => {
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send(req.body);
}