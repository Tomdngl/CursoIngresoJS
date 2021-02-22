/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
Tomas D'Angelo
Ejercicio 3 while*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	while (claveIngresada!= "utn750") {
		claveIngresada = prompt("ingrese el número clave.");
	}
	alert("Gracias");

}//FIN DE LA FUNCIÓN
