//Tomas D'Angelo
//Ejercicio 6 While
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	contador=0;
	acumulador=0;
	
	
	while (contador<5) {
		numeroIngresado=prompt("Ingrese su nota");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=numeroIngresado+acumulador;
		contador=contador+1;
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/5;
}//FIN DE LA FUNCIÓN