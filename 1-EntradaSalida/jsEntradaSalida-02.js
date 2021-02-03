/*
D'Angelo Tomás
Ejercicio 2
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	
	/*Definir var, caso contrario la consola nos
	va a decir "undefined" lo que quiere decir que no
	esta definida*/
	nombreIngresado = prompt("Ingrese su nombre");
	alert("Su nombre es " + nombreIngresado);
}

