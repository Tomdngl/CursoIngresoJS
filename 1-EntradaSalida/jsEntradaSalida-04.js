/* 
D'Angelo Tomás
Ejercicio 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreNuevo;

	nombreNuevo = prompt("Inserte su nombre");
	document.getElementById('txtIdNombre').value=nombreNuevo;
}

/*Metodos de entrada:
prompt("Txt");
document.getElementById('elemento html').value;
*/
