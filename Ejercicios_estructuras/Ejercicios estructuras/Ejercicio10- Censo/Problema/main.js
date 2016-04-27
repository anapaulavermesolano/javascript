var cantidad= 0;
var edadV = 0;
var masculino= 0;
var femenino= 0;
do {
	var documento= Number(prompt("Escriba el número de documento." + "\nSi desea finalizar el programa escriba el numero 0."));
	if(documento===0) {
		alert("Programa finalizado.");
	}else {
		var edad = Number(prompt("Escriba su edad"));
		var sexo= prompt("Escriba si es 'femenino' o 'masculino'");
		switch (sexo) {
			case "femenino":
				femenino++;
				break;
			case "masculino":
			if(edad>16 && edad<65) {
				edadV++;
			}
				masculino++;
				break;
			default:
				alert("Vuelve a intentarlo");
				break;
		}
		document.write("<br>"+"N° de documento: "+ documento+ "<br>"+"Edad: "+ edad+ "<br>"+"Sexo: "+ sexo);
		document.write("<br>");
	}
	cantidad++;
}while (documento!= 0);
document.write("<br>" + "Total de personas censadas: "+ (cantidad-1)+ "<br>"+ "Cantidad de varones: "+masculino+"<br>"+ "Cantidad de mujeres: "+femenino+"<br>"+ "Cantidad de varones cuya edad varía entre 16 y 65 años.: "+edadV);