console.log("Hello World Motherfuckers")
 
function verificarPalindromo(palavra) {
    // deixa a palavra toda em minúscula pra não dar erro
    palavra = palavra.toLowerCase();
    
    let palavraInvertida = palavra.split("").reverse().join("");
    
    return palavra === palavraInvertida;
}

let palavraDoUsuario = prompt("Digite uma palavra para verificar se é um palíndromo:");

if (verificarPalindromo(palavraDoUsuario)) {
    console.log("A palavra é um palíndromo!");
} else {
    console.log("A palavra não é um palíndromo.");
}
