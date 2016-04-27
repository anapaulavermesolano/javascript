var numero = Number(prompt("Escribe un numero y se mostrara su factorial"));
var factorial = 1;
for(var i = 1; i<=numero;i++ ) {
	factorial*=i;
	document.write('<br>'+factorial);
}
alert("El "+ numero+ "! "+ " es: " +factorial);