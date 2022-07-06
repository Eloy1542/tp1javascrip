let numero1 = parseInt(prompt("Ingrese primer numero"));
let numero2 = parseInt(prompt("Ingrese segundo numero"));
let numero3 = parseInt(prompt("Ingrese tercer numero"));

if(numero1 > numero2 & numero1 > numero3){
    document.write("El numero mayor es " + numero1)
}else if(numero2 > numero1 & numero2 > numero3){
    document.write("El numero mayor es " + numero2)
}else if(numero3 > numero2 & numero3 > numero1){
    document.write("El numero mayor es " + numero3)
}
