let numero1 = parseInt(prompt("Ingrese un numero"));
let number = (2, 3, 5, 7);

if ((numero1 % 2 == 0) & (numero1 % 3 == 0)) {
  document.write("Es divisible en 2 y 3");
} else if ((numero1 % 2 == 0) & (numero1 % 5 == 0)) {
  document.write("Es divisible en 2 y 5");
} else if ((numero1 % 2 == 0) & (numero1 % 7 == 0)) {
  document.write("Es divisible en 2 y 7");
} else if ((numero1 % 3 == 0) & (numero1 % 2 == 0)) {
  document.write("Es divisible en 3 y 2");
} else if ((numero1 % 3 == 0) & (numero1 % 5 == 0)) {
  document.write("Es divisible en 3 y 5");
} else if ((numero1 % 3 == 0) & (numero1 % 7 == 0)) {
  document.write("Es divisible en 3 y 7");
} else if ((numero1 % 5 == 0) & (numero1 % 2 == 0)) {
  document.write("Es divisible en 5 y 2");
} else if ((numero1 % 5 == 0) & (numero1 % 3 == 0)) {
  document.write("Es divisible en 5 y 3");
} else if ((numero1 % 5 == 0) & (numero1 % 7 == 0)) {
  document.write("Es divisible en 5 y 7");
} else if ((numero1 % 7 == 0) & (numero1 % 2 == 0)) {
  document.write("Es divisible en 7 y 2");
} else if ((numero1 % 7 == 0) & (numero1 % 3 == 0)) {
  document.write("Es divisible en 7 y 3");
} else if ((numero1 % 7 == 0) & (numero1 % 5 == 0)) {
  document.write("Es divisible en 7 y 5");
} else if (numero1 % 2 == 0) {
  document.write("Es divisible en 2");
} else if (numero1 % 3 == 0) {
  document.write("Es divisible en 3");
} else if (numero1 % 5 == 0) {
  document.write("Es divisible en 5");
} else {
  document.write("Es divisible en 7");
}
