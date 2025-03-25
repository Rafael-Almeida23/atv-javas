console.log("Hello World Motherfuckers")

let palavra = prompt("Digite uma palavra:");
function contarVogais(palavra) {
    let contador = 0;
    let vogais = "aeiouAEIOU";
    
    for (let i = 0; i < palavra.length; i++) {
      if (vogais.includes(palavra[i])) { // Verifica se o caractere é uma vogal
        contador++;
      }
    }
  
    console.log("Quantidade de vogais:", contador);
  }
   
  contarVogais(palavra);
  
  
  
  
