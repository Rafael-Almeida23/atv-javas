console.log("Hello World Motherfuckers")

let fraseUsuario = prompt("Digite uma frase:");
function substituirPalavra(texto) {
    return texto.replace(/azul/g, "vermelho");
}

let novaFrase = substituirPalavra(fraseUsuario);
console.log("Frase original:", fraseUsuario);
console.log("Frase modificada:", novaFrase);

//O replace serve para substituir uma parte de uma string por outra. 

