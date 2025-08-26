let number  = parseFloat(window.prompt("premiere chiffre"));
document.write(`<h1>first number is: ${number}</h1>`)

let number2  = parseFloat(window.prompt("duxieme chiffre"));
document.write(`<h1>second number is : ${number2}</h1>`)
document.write(`<h1>So ${number} + ${number2}</h1>`)

let result = number + number2 ;
document.write(`<h1>the result is : ${result}`)