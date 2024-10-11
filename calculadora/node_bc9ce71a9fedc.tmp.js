const readline = require('readline');

// Criar interface para capturar entradas do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funções para realizar as operações matemáticas
function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if (num2 === 0) {
        return "Erro: divisão por zero!";
    }
    return num1 / num2;
}

// Função para solicitar entrada do usuário de forma assíncrona
function perguntar(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

// Função principal
async function iniciarCalculadora() {
    let resposta;

    do {
        const n1 = parseInt(await perguntar("Digite um número: "));
        const sinal = await perguntar("Qual operação deseja realizar? Digite +, -, * ou /: ");
        const n2 = parseInt(await perguntar("Digite outro número: "));
        let resultado;

        switch (sinal) {
            case '+':
                resultado = soma(n1, n2);
                console.log("O resultado é: " + resultado);
                break;
            case '-':
                resultado = subtracao(n1, n2);
                console.log("O resultado é: " + resultado);
                break;
            case '*':
                resultado = multiplicacao(n1, n2);
                console.log("O resultado é: " + resultado);
                break;
            case '/':
                resultado = divisao(n1, n2);
                console.log("O resultado é: " + resultado);
                break;
            default:
                console.log("Não reconheço a operação escolhida, verifique os valores digitados e tente novamente.");
        }

        resposta = await perguntar("Deseja continuar? (s/n): ");
    } while (resposta !== 'n' && resposta !== 'N');

    // Fechar o readline
    rl.close();
}

// Iniciar a calculadora
iniciarCalculadora();
