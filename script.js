console.log("Hello World Motherfuckers")
 
function mensagemPersonalizada() {
    let nome = prompt("Digite seu nome:");
    let mensagem = prompt("Digite sua mensagem (ou deixe em branco para usar 'Olá!'):") || "Olá!";
    
    console.log("Olá!"); 
    console.log(`${mensagem} ${nome}`); // ${} Permite inserir variáveis e expressões diretamente dentro da string.
}

mensagemPersonalizada(); // Chama a função quando a página for carregada
