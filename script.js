console.log("Hello World Motherfuckers");

let letra = prompt("Digite uma letra:").toLowerCase(); // Converte para minúscula
let vogais = ['a', 'e', 'i', 'o', 'u'];

if (letra.length !== 1 || !isNaN(letra)) {
    alert("Por favor, digite apenas uma letra.");
} else if (vogais.includes(letra)) {
    alert(`A letra "${letra}" é uma VOGAL.`);
} else {
    alert(`A letra "${letra}" é uma CONSOANTE.`);
}