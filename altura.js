// defina uma funçao que calcule o IMC. escreva um script que leia o peso
//e a altura de tres pessoas e que escreva a media aritmetrica dos seus IMCs


let pesoP1 = 51
let pesoP2 = 60
let pesoP3 = 70

let alturaP1 = 1.68
let alturaP2 = 1.75
let alturaP3 = 1.70

function IMC(peso, altura) {
    return (peso / (altura**2))
    
}


console .log ("mostre o IMC1: ", IMC (pesoP1, alturaP1).toFixed(2));
console .log ("mostre o IMC2: ", IMC (pesoP2, alturaP2) .toFixed(2));
console .log ("mostre o IMC3: ", IMC (pesoP3, alturaP2) .toFixed(2));


let IMC1 = IMC(pesoP1, alturaP1)
let IMC2 = IMC(pesoP2, alturaP2)
let IMC3 = IMC(pesoP3, alturaP3)

function mediaIMC(IMC1, IMC2, IMC3) {
    return (IMC1+IMC2+IMC3)/3
}

console.log("mostre a media dos IMCs: ", mediaIMC(IMC1, IMC2, IMC3).toFixed(2))

