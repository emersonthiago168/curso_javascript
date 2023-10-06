(function () {
    function Calculadora() {
        this.display = document.querySelector('.display');

        this.inicia = () => {
            this.cliqueBotoes();
            this.pressEnter();
        }


        this.cliqueBotoes = () => {
            document.addEventListener('click', e => {
                let el = e.target;
                
                if (el.classList.contains('btn-num')) this.addDisplay(el.innerText);
                if (el.classList.contains('btn-clear')) this.clearDisplay();
                if (el.classList.contains('btn-del')) this.delOne();
                if (el.classList.contains('btn-eq')) this.realizaConta();
            })
        }
        
        this.pressEnter = () => {
            document.addEventListener('keypress', e => {
                e.preventDefault();
                
                if (e.key === 'Enter') this.realizaConta();
            })
        }
        
        this.addDisplay = valor => this.display.value += valor;
        this.clearDisplay = () => this.display.value = '';
        this.delOne = () => this.display.value = this.display.value.slice(0, -1);
        this.realizaConta = () => {
            let conta = this.display.value;

            try {

                this.conta = eval(conta);

                if (!conta) {
                    alert('Digite um valor válido');
                    return;
                }

                this.display.value = this.conta;
            } catch {
                alert('Digite um valor válido')
                return
            }
        }
    }

    const calculadora = new Calculadora();
    calculadora.inicia();
})();