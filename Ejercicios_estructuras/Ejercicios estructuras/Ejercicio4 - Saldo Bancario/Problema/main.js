var suma = 0;
do {
	var numeroDeCuenta= Number(prompt("Ecriba su numero de cuenta, mínimo 7 numeros. Para detener el programa escriba un numero negativo."));
	if(numeroDeCuenta<0) {
		alert('Programa finalizado');
	}else {
		var nombreDelCliente= prompt("Ecriba su nombre");
		var saldo= Number(prompt("Ecriba su Saldo"));
	}
	if(saldo>0) {
		document.write('<br>'+'Numero de cuenta: ' +numeroDeCuenta+ '<br>'+'Nombre del cliente: ' +nombreDelCliente+ '<br>'+'Estado de cuenta: ' +saldo+ '; Acreedor');		
		document.write('<br>');
		suma += saldo;
	}else if (saldo === 0) {
		document.write('<br>'+'Numero de cuenta: ' +numeroDeCuenta+ '<br>'+'Nombre del cliente: ' +nombreDelCliente+ '<br>'+'Estado de cuenta: ' +saldo+ '; nulo');
		document.write('<br>');
	}else {
		document.write('<br>'+'Numero de cuenta: ' +numeroDeCuenta+ '<br>'+'Nombre del cliente: ' +nombreDelCliente+ '<br>'+'Estado de cuenta: ' +saldo+ '; Deudor');		
		document.write('<br>');
	}
}while(numeroDeCuenta>0);
document.write('\n' +"La suma de los saldos acreedores es: " +suma);

