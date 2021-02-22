/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
Tomás D'Angelo
While 09*/
function mostrar()
{
    let numeroIngresado;
    let flag;
    let nMax;
    let nMin;
    let respuesta;
    let salir;

    flag=true;
    salir='n';

    while (salir=='n') {
        numeroIngresado=parseInt(prompt("Ingrese un numero"));

        if (numeroIngresado < nMin || flag==true) {
            nMin=numeroIngresado;
        }
        if (numeroIngresado > nMax || flag==true) {
            nMax=numeroIngresado;
            flag=false;
        }

        respuesta=confirm("¿Desea continuar? s/n");
        if (respuesta==false) {
            salir='s';
        }
    }

    document.getElementById('txtIdMinimo').value=nMin;
    document.getElementById('txtIdMaximo').value=nMax;
}