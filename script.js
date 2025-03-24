console.log("Hello World Motherfuckers")
 
let numeroUsuario = parseFloat(prompt("Digite um número para verificar seu sinal:"));
function verificarSinal(numero) {
    if (numero > 0) {
        console.log("Positivo");
    } else if (numero < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}

verificarSinal(numeroUsuario);


