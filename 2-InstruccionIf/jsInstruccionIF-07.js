function mostrar()
{
	let edad;
	let estado;

	edad=document.getElementById('txtIdEdad').value;
	estado=document.getElementById('estadoCivil').selectedIndex;
	edad=parseInt(edad);
	
	/*selectedIndex sirve para tomar el dato de una lista select,
	el valor va a ser un int teniendo el valor de la lista contando
	de arriba hacia abajo.*/
	
	if (edad < 18 && estado != 0)
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
}