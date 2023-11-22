class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado`);
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o metódo ligar.');
    }

    falaOi() {
        console.log('Oi');
    }
}

class TabletPequeno extends Tablet {
    constructor(nome, preco) {
        super(nome);
        this.preco = preco;
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
const t1 = new Tablet('iPad', true);
const tp = new TabletPequeno('Tablet Pequeno', 250);
console.log(s1);
console.log(t1);
console.log(tp);