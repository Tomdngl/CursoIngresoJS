//Ejercicio 4 switch | Tomás D'Angelo
function mostrar()
{
	let mesDelAño=document.getElementById('txtIdMes').value;
	let mensaje
	switch (mesDelAño) {
		case 'Enero':
		case 'Marzo':
		case 'Mayo':
		case 'Julio':
		case 'Agosto':
		case 'Octubre':
		case 'Diciembre':
			mensaje="Tiene 31 días";
			break;
		case 'Febrero':
			mensaje="Tiene 28 días";
			break;
		case 'Abril':	
		case 'Septiembre':	
		case 'Junio'	:
		case 'Noviembre':
			mensaje="Tiene 30 días";
			break;	
	}
	alert(mensaje);
}