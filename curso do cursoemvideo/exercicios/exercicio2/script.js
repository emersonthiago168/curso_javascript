alert('Nesse exercício foram utilizadas condições aninhadas para determinar a idade de acordo com o ano e a imagem de acordo com o sexo e idade')

function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50%'
        img.style.margin = 'auto'

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criancah.webp')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemh.jpeg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultoh.webp')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosoh.webp')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criancam.webp')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultomulher.webp')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosom.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}

