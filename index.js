
// Variáveis
let nomeHeroi = ["Mega" , "Zaad" , "Zord" , "Steel", "Maxx", "Sinner"]
let xpHeroi = [ 3444, 5000, 6500, 7400, 9987, 1000000 ]

//Operadores

let maiorQue = 5 > 2;    // maiorQue = true
let igual = 5 == '5';    // igual = true
let estritamenteIgual = 5 === '5'; // estritamenteIgual = false
let eLogico = true && false; // eLogico = false
let ouLogico = true || false; // ouLogico = true
let naoLogico = !true; // naoLogico = false

// Laços de repetição
for ( let i = 0; i < nomeHeroi.length; i++){
    
   // Variáveis
    let nome = nomeHeroi[i]
    let xp = xpHeroi[i]
    let nivel

    // Estrutura condicionais
    if (xp < 1000){
        nivel = "Ferro"

    } else if(xp >= 1001 && xp <= 2000) {
        nivel = "Bronze"

    } else if (xp >= 2001 && xp <= 5000){
        nivel = "Prata"

    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro"

    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina"

    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente"

    } else if (xp >= 9001 && xp <= 10000){
        nivel = "Imortal"

    } else if (xp >= 10001){
        nivel = "Radiante"
    }

    // Saída
    console.log(`O Herói de nome ${nome} está no nível ${nivel}`)
}