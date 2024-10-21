const prompt = require('prompt-sync')();  // Função para capturar entradas do usuário no terminal.

function obterNumero(min, max) {
    let numero;
    let valido = false;

    do {
        let entrada = prompt(`Digite um número entre ${min} e ${max}: `);  // Solicita a entrada do usuário.
        
        // Verifica se a entrada é um número e se está dentro do intervalo.
        if (!isNaN(entrada) && entrada.trim() !== '') {
            numero = parseInt(entrada);
            if (numero >= min && numero <= max) {
                valido = true;  // O número é válido.
            } else {
                console.log(`Número inválido! Por favor, digite um número entre ${min} e ${max}.`);
            }
        } else {
            console.log('Entrada inválida! Apenas números são aceitos.');
        }

    } while (!valido);  // Continua solicitando até que o número seja válido.

    return numero;  // Retorna o número validado.
}

// Exemplo de uso da função dentro do loop principal:
let numeros = [];

for (let e = 0; e < 5; e++) {
    let numero = obterNumero(0, 100);  // Chama a função para validar a entrada.
    numeros.push(numero);  // Adiciona o número validado ao array.
}

console.log("Números inseridos: ", numeros);  // Exibe os números validados.
