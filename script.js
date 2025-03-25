console.log("Hello World Motherfuckers")
 
function converterTemperatura(celsius) {
    let fahrenheit = (celsius * 9/5) + 32; //isso é a fórmula do farenheit
    return fahrenheit;
}

let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em Celsius:"));

let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius);
console.log(`${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit}°F`);


