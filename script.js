console.log("Hello World Motherfuckers");

let numero = parseInt(prompt("Digite um número:"));

if (numero % 2 === 0) {
    // Número é par, então transformamos em ímpar somando 1
    numero += 1;
    alert(`O número era par, Agora é ímpar: ${numero}`);
} else {
    // Número é ímpar, transformamos em par subtraindo 1
    numero -= 1;
    alert(`O número era ímpar, Agora é par: ${numero}`);
}