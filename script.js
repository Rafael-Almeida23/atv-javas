console.log("Hello World Motherfuckers")

let text = prompt('Digite alguma palavra');

reverseString(text)

function reverseString(text){
    console.log(text.split('').reverse().join(''));
}
//split serve pra seprar um array, reverse para reverter e join para juntar