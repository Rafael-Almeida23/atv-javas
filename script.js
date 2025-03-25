console.log("Hello World Motherfuckers")

let nota = prompt("Digite a sua nota:");
function verificarAprovacao(nota) {
    if (nota >= 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
  console.log(verificarAprovacao(Number(nota)));
  
  
