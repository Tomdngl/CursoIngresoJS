function mostrar()
{

		let edad;
		let estado;
	
		edad=document.getElementById('txtIdEdad').value;
		estado=document.getElementById('estadoCivil').selectedIndex;
		edad=parseInt(edad);
		
		if (edad > 18 && estado == 0)
		{
			alert("Es soltero y no es menor");
		}

}