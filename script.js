console.log('Hello World MotherFuckers');

let numero = prompt("Dígite seu número");

function verificarPar(numero){

    if (numero % 2 === 0) {
       console.log(numero + " é igual a par.");
    } else {
        console.log(numero + " é igual a ímpar."); 
    }
}
verificarPar(numero);