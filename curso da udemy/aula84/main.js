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

    // Método estático - referente a classe
    static trocaPilha() {
        console.log('Ok, vou trocar');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);