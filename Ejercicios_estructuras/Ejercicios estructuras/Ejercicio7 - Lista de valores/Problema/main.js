var a= [];
for(var x= 1; x<= 2; x++) {
	document.write("<br>" + "Lista  N° " +x);
	document.write("<br>");
	var suma = 0;
	for(var y= 1; y<= 3; y++){
		a[y] = [];
		a[y] = parseInt(prompt("Escribe lista N° " +x+ " valor  "+ y));
		suma += a[y];
		document.write("<br>"+ a[y]);
	}
	document.write("<br>"+"suma total de la lista N° "+ x +": "+suma);
	document.write("<br>");
	document.write("<br>");
}
