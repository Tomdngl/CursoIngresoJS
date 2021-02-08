function mostrar()
{
	let edad;
	edad=document.getElementById('txtIdEdad').value;

	edad=parseInt(edad);


	if (edad >= 13 && edad <= 17 ) {
		alert("Usted es un adolescente")
	}
	else if (edad < 13) {
		alert("Usted es un niño")		
	}
	else{
		alert("Usted es mayor de edad")
	}

}