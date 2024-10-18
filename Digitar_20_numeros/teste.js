const prompt = require('prompt-sync')();

let numeros = [];
let soma = 0;



for (let e = 0; e < 5; e++) {
    let numero = parseInt(prompt('Digite 5 números de 0 a 100: '))
    numeros.push(numero);
    soma += numero;
}

let media = soma / 5;

console.log("Números inseridos: ", numeros);
console.log("Soma: " + soma);
console.log("Média: " + media);
