//Ejercicio 3 switch | Tomás D'Angelo
function mostrar()
{
	let mesDelAño =document.getElementById('txtIdMes').value;
	switch (mesDelAño){
	case 'Febrero':
		alert("Este mes no tiene mas de 29 días");
		break;
	default:
		alert("Este mes tiene 30 o más días");
	}
}