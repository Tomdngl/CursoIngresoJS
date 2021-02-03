/*
D'Angelo Tomás
Ejercicio 5 bis
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
Se debe tomar de alguna manera el apellido y mostrarlo así
Perez, usted se llama José y tiene 66 años	*/
function mostrar()
{	
	var nombre;
	var edad;
	var apellido;

	apellido=prompt("Antes de continuar, escriba su apellido por favor.");
	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value;
	
	alert(apellido + ", usted se llama " + nombre + " y tiene " + edad + " años");
}

