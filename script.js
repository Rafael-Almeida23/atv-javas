console.log("Hello World Motherfuckers");

let numeros = [];

for (let i = 1; i <= 4; i++) {
    let valor = parseInt(prompt(`Digite o ${i}º número inteiro:`));
    numeros.push(valor);
}

numeros.sort((a, b) => b - a); // Ordena em ordem decrescente

alert("Números em ordem decrescente:\n" + numeros.join(", "));