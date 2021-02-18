//D'Angelo Tomás
//Ejercicio 9 switch
function mostrar()
{
	const tarifaBase = 15000;
	let estacionIngresada;
	let destinoIngresado;
	let precioFinal;
	let aumento;
	let descuento;

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					aumento=20;
					descuento=0;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento=0;
					descuento=10;
					break;
				case "Mar del plata":
					aumento=0;
					descuento=20;
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					aumento=0;	
					descuento=20;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento=10;
					descuento=0;
					break;
				case "Mar del plata":
					aumento=20;
					descuento=0;
					break;
			}
			break;
			
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento=10;
					descuento=0;
					break;
				case "Cordoba":
					aumento=0;	
					descuento=0;
					break;
			}
			break;
	}

	console.log("aumento es " + aumento);
	console.log("descuento es " + descuento);

	precioFinal=tarifaBase+(tarifaBase*aumento/100)-(tarifaBase*descuento/100);

	alert("El precio final de su estadia es de $"+precioFinal);

}