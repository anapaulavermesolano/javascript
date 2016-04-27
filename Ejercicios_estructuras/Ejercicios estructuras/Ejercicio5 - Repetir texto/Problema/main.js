var parrafo = prompt("Escribe que quieres que se repita");
var cantidad = Number(prompt("Escribe cuantas veces quieres que se repita"));
for(var i = 1; i<= cantidad; i++) {
	document.write("<br>"+ i+ ": " +parrafo);
}
