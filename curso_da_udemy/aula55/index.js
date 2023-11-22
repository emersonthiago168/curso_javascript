// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
    const sobrenome = 'Pedro'
    function criaNome(nome) {
        return `${nome} ${sobrenome}`
    }

    function falaNome(){
        console.log(criaNome('João'))
    }

    falaNome();
    console.log(idade, peso, altura)

})(30, 79, 1.75);