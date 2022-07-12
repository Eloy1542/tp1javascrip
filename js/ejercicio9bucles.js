let frase = prompt("Ingrese una palabra de 10 caracteres");
let x = 0;
while (x < frase.length) {
  if (
    frase.charAt(x) === "a" ||
    frase.charAt(x) === "e" ||
    frase.charAt(x) === "i" ||
    frase.charAt(x) === "o" ||
    frase.charAt(x) === "u"
  ) {
    document.write(frase.charAt(x));
    x++;
  } else x++;
}
