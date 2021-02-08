/*
Tomás D'Angelo
Ejercicio 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe;
	let resultado;
	const valorAumento = 10;

	importe=document.getElementById('txtIdSueldo').value;
	importe=parseInt(importe);

	resultado = importe + (importe * valorAumento / 100);
	document.getElementById('txtIdResultado').value=resultado;

}
