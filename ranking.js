
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

 