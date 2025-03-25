console.log("Hello World Motherfuckers")

let nome = prompt("Qual é o seu nome?");
function saudacao(nome, saudacao = "Bem-vindo(a)") {
    return `${saudacao}, ${nome}!`;
  }
  
  console.log(saudacao(nome));
  
