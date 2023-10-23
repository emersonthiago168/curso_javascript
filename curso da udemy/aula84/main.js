function teste() {
    console.log('Este é meu teste'); // - this => objeto global
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Método de instância - referente a instância em si
    aumentarVolume() {
        this.volume += 2;
    }

    // Método de instância - referente a instância em si 
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático - "Uma função que está dentro da classe"
    static soma(x, y) {
        console.log(this); // this => classe
    }
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma();



