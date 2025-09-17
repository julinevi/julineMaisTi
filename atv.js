//1. troca de valores
let a = 7;
let b = 14;
let c = a;

a = b;
b = c;

console .log ("a =", a); // Deve ser 7
console .log ("b =", b); // Deve ser 14
console .log ("c =", c); // Valor auxiliar

//2. verificador de maioridade

let maioridade = 18;
let idade = 17

function ehMaiorDeIdade(idade) {
    return idade >= maioridade
}
console .log (ehMaiorDeIdade(22)); //true
console .log (ehMaiorDeIdade(16)); //false

//6. verificador de intervalo

let min = 10;
let max = 50;
let numero = 32

function estaNoIntervalo(numero) {
    resultado = (numero => min)  && (numero <= max);

    return resultado
}

console .log (estaNoIntervalo(21)); // true
console .log (estaNoIntervalo(11)); // false

