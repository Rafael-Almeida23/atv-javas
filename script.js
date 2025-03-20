console.log('Hello World MotherFuckers');

let n1 = parseFloat(prompt("Escreva o primeiro número:"));
let n2 = parseFloat(prompt("Escreva o segundo número:"));

function calcular(num1,num2){
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const divisao = num1 / num2;
    const multiplicacao = num1 * num2;
    console.log(soma)
    console.log(subtracao)
    console.log(multiplicacao)
    if (num2 === 0) {
        console.log("Não da pra dividir por 0")
    } else {
    const divisao = num1 / num2;
    console.log(divisao)
    }
}

calcular(n1, n2);