console.log("Hello World Motherfuckers");

let entrada = prompt("Digite os números que você quer somar, separados por vírgula:");
let numeros = entrada.split(',').map(num => parseFloat(num.trim()));
let soma = 0;

for (let num of numeros) {
    soma += num;
}

alert(`A soma total dos números é: ${soma}`);