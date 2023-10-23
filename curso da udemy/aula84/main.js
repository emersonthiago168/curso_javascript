class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
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
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

console.log(ControleRemoto.soma(2, 4));

