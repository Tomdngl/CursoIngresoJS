/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Tomás D'Angelo
Ejercicio 5 while*/
function mostrar()
{

	let sexoIngresado;
	do {	
		sexoIngresado = prompt("ingrese f ó m .");

		switch (sexoIngresado) {
			case "f":
				document.getElementById('txtIdSexo').value="femenino";
				break;
			case "m":
				document.getElementById('txtIdSexo').value="masculino";
				break;
		}

	} while (sexoIngresado!="f" && sexoIngresado!="m");


}//FIN DE LA FUNCIÓN
