var ladoUno= Number(prompt("Escribe el lado 1"));
var ladoDos= Number(prompt("Escribe el lado 2"));
var ladoTres= Number(prompt("Escribe el lado 3"));

if (ladoUno===ladoDos && ladoUno===ladoTres) {
	alert("Es un triangulo equilatero");
}
else if (ladoUno===ladoDos || ladoUno===ladoTres || ladoTres===ladoDos) {
	alert("Es un triangulo isósceles");
}
else if (ladoUno!=ladoDos && ladoUno!=ladoTres && ladoDos!=ladoTres ) {
	alert("Es un triangulo escaleno");
	if(ladoUno*ladoUno===ladoDos*ladoDos+ladoTres*ladoTres || ladoDos*ladoDos===ladoUno*ladoUno+ladoTres*ladoTres || ladoTres*ladoTres===ladoUno*ladoUno+ladoDos*ladoDos) {
	alert("Es un triangulo rectangulo");	
	}
}
