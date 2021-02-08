/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;
	const valorDescuento = 25;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	resultado=importe-(importe * valorDescuento / 100);
	document.getElementById('txtIdResultado').value=resultado;
}
