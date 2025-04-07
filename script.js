console.log("Hello World Motherfuckers");

let contador = 10;

let intervalo = setInterval(() => {
    console.log(contador);
    contador--;

    if (contador < 0) {
        clearInterval(intervalo); // para a contagem quando chega a 0
        console.log("Lançamento!");
    }
}, 1000); // set interval executa a função a cada 1 segundo = 1000 milissegundos
