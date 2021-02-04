/*
Tp 1 Ferrete Facturacion
Tomás D'Angelo
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;  
	let precioDos;  
    let precioTres;
    let resultado;
    let resultadoFinal;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    resultado=precioUno+precioDos+precioTres;
    resultadoFinal=resultado.toFixed(2);
    alert("El resultado de la suma es " + resultadoFinal);
    
}

function Promedio () 
{
	let precioUno;  
	let precioDos;  
    let precioTres;
    let suma;
    let promedio;
    let resultado;


    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    suma=precioUno+precioDos+precioTres;
    promedio=suma/3;
    resultado=promedio.toFixed(2)
    alert("El promedio de los precios es " + resultado);
}

function PrecioFinal () 
{
	let precioUno;  
	let precioDos;  
    let precioTres;
    let suma;
    let resultado;
    let resultadoFinal;

    const valorIva = 21;
    
    //Q: ¿El valor de una constante se puede declarar en la misma linea que la creas o es una mala practica?
    //A: Se debe asignar en la misma linea, caso contrario nos da error

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    suma=precioUno+precioDos+precioTres;
    resultado=suma+(suma*valorIva/100);

    resultadoFinal=resultado.toFixed(2);

    alert("El precio final es" + resultadoFinal);
}