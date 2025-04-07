console.log("Hello World Motherfuckers");

let ganhoBrutoMensal = parseFloat(prompt("Digite o ganho bruto mensal da empresa:"));
let totalGanhos = ganhoBrutoMensal * 12;

let totalGastos = 0;

for (let i = 1; i <= 12; i++) {
    let gasto = parseFloat(prompt(`Digite os gastos do mês ${i}:`));
    totalGastos += gasto;
}

let saldoFinal = totalGanhos - totalGastos;

let mensagem;
if (saldoFinal > 0) {
    mensagem = "A empresa teve LUCRO no ano.";
} else if (saldoFinal < 0) {
    mensagem = "A empresa teve PREJUÍZO no ano.";
} else {
    mensagem = "A empresa fechou o ano com a mesma quantia.";
}

alert(
    `Total de Ganhos: R$ ${totalGanhos.toFixed(2)}\n` +
    `Total de Gastos: R$ ${totalGastos.toFixed(2)}\n` +
    `Saldo Final: R$ ${saldoFinal.toFixed(2)}\n\n` +
    `${mensagem}`
);
