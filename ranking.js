
function NivelRanqueadas2(vitoriass, derrotass){
    
    let Saldodasvitorias = vitoriass-derrotass;
    let ni;

    if (Saldodasvitorias < 10) {
        ni="ferro";
} else if (Saldodasvitorias >= 11 && Saldodasvitorias <= 20) {
    ni = "Bronze";
} else if (Saldodasvitorias >= 21 && Saldodasvitorias <= 50) {
    ni = "Prata";
} else if (Saldodasvitorias >= 51 && Saldodasvitorias <= 80) {
    ni = "Ouro";
} else if (Saldodasvitorias >= 81 && Saldodasvitorias <= 90) {
    ni = "Diamante";
} else if (Saldodasvitorias >= 91 && Saldodasvitorias <= 100) {
    ni = "Lendário ";
} else {
    ni = "Imortal 😈"
}
    return `O Herói tem um saldo de ${Saldodasvitorias} está no nível de ${ni}!`;
}


let vitoriass= 200;
let derrotass= 100;
const resultadoss = NivelRanqueadas2(vitoriass,derrotass);
console.log(resultadoss)

 


















// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
const heroi2 = new Heroi('Gandalf', 1000, 'mago');
const heroi3 = new Heroi('Bruce Lee', 32, 'monge');
const heroi4 = new Heroi('Hattori Hanzo', 25, 'ninja');

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();