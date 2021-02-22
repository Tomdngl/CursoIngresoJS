/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Tomás D'Angelo
While 08*/
function mostrar()
{
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let confirmar;
	let flag;

	flag=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	confirmar="s";

	while (confirmar=="s"||confirmar=="S") {
		
		respuesta=parseInt(prompt("Inserte el numero deseado"));
		if (respuesta>=0) {
			sumaPositivos=sumaPositivos+respuesta;
		}
		else{
			multiplicacionNegativos=multiplicacionNegativos*respuesta;
			flag=1;
		}
		confirmar=prompt("¿Desea agregar otro numero? s/n")
	}

	document.getElementById('txtIdSuma').value=sumaPositivos;

	if (flag==1) {
			document.getElementById('txtIdProducto').value=multiplicacionNegativos;
	}
	else{
		document.getElementById('txtIdProducto').value=0;
	}


}//FIN DE LA FUNCIÓN