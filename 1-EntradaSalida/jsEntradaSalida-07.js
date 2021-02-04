/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;
	var respuesta;	


	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;
	respuesta=resultado

	alert("La suma es " + respuesta)
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var respuesta;	


	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno-numeroDos;
	respuesta=resultado

	alert("La resta es " + respuesta)
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;
	var respuesta;	


	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno*numeroDos;
	respuesta=resultado

	alert("La multiplicación es " + respuesta)
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var respuesta;	


	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno/numeroDos;
	respuesta=resultado

	alert("La división es " + respuesta)
}

/*Declarar variables dentro de la función, utilizar
variables globales es una mala práctica, descuenta
puntos en el parcial.*/

//Al hacer una operación aritmetica con NaN el resultado es NaN
