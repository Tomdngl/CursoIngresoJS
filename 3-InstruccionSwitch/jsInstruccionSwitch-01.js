//Ejercicio 1 switch | Tomás D'Angelo
function mostrar()
{
	let mesDelAño =document.getElementById('txtIdMes').value;
	switch (mesDelAño) {
		case 'Enero':
			alert("Que comiences bien el año!!!.");
			break;
		case 'Febrero':
			alert("Febrero");
			break;
		case 'Marzo':
			alert("a clases!!!.");
			break;
		case 'Abril':
			alert("Abril");
			break;
		case 'Mayo':
			alert("Mayo");
			break;
		case 'Junio':
			alert("Junio");
			break;
		case 'Julio':
			alert("se vienen las vacaciones!!!");
			break;
		case 'Agosto':
			alert("Agosto");
			break;
		case 'Septiembre':
			alert("Septiembre");
			break;
		case 'Octubre':
			alert("Octubre");
			break;
		case 'Noviembre':
			alert("Noviembre");
			break;
		case 'Diciembre':
			alert("Felices fiesta!!!.");
			break;
	}

}