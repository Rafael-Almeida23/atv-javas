console.log("Hello World Motherfuckers")
 
function media() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let num3 = parseFloat(prompt("Digite o terceiro número:"));
    
    let resultado = (num1 + num2 + num3) / 3;
    
    console.log(`A média é: ${resultado}`);
}
//O parseFloat é usado para converter uma string em um número decimal
media();
