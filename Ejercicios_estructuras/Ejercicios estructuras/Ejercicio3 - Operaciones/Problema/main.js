suma = 0;
resta = 0;
division = 0;
multiplicacion=0;
var a = Number(prompt("Escribe el 1° número"));
var b = Number(prompt("Escribe el 2° número"));
if(a > b) {
	suma = a + b;
	resta = a-b;
	document.write('<br>'+"la suma de los numeros: "+ a +" + "+ b+ " = "+ suma);
	document.write('<br>'+"la resta de los numeros: "+ a +" - "+ b+ " = "+ resta);
}
else if(a===b) {
	alert("Los numeros son iguales");
}
else {
	multiplicacion = b*a;
	division = b/a;
	document.write('<br>'+"la multiplicacion de los numeros: "+ a +" x "+ b+ " = "+ multiplicacion);
	document.write('<br>'+"la division de los numeros: "+ a +" % "+ b+ " = "+ division.toFixed(2));
}
