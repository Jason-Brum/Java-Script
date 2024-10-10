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
    return num1 / num2;
}

function calculadoraInicio() {

    let resposta;
   
    do {

        let n1 = parseInt(prompt("Digite um número: "));
        let sinal = prompt("Digite o sinal da operação: +, - * ou / ");
        let n2 = parseInt(prompt("Digite outro número:"));

        let resultado;

    

        switch (sinal) {
                case '+':
                    resultado = soma(n1, n2);
                    alert("O resultado é: " + resultado);
                    break;

                case '-':
                    resultado = subtracao(n1, n2);
                    alert("O resultado é: " + resultado);
                    break;

                case '*':
                    resultado = multiplicacao(n1, n2);
                    alert("O resultado é: " + resultado);
                    break;
                
                case '/':
                    resultado = divisao(n1, n2);
                    alert("O resultado é: " + resultado);
                    break;    

                      }

        resposta = prompt("Deseja continuar? (s/n): ");
                      console.log (resposta);
    } while (resposta != 'n' && resposta != 'N');

}

calculadoraInicio()