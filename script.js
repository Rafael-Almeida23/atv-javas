console.log("Hello World Motherfuckers")

let texto = prompt("Digite uma frase:");
function verificarTamanho(texto) {
    if (texto.length > 10) {
        console.log("A string tem mais de 10 caracteres.");
    } else {
        console.log("A string tem 10 caracteres ou menos.");
    }
}
// O .length conta quantos caracteres tem uma palavra ou quantos itens tem uma lista.
verificarTamanho(texto);