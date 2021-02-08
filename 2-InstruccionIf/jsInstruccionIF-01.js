function mostrar()
{
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	
	edad=parseInt(edad)
	console.log(edad);
	
	if (edad==15) {
		alert("niña bonita");
	}
}