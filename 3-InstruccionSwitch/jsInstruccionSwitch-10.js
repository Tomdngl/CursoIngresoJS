function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let estadoViaje;

	switch (estacionIngresada) {
			case "Invierno":
				switch (destinoIngresado) {
					case "Bariloche":
						estadoViaje="abierto";
						break;
				
					default:
						estadoViaje="cerrado"
						break;
				}
				break;

			case "Verano":
				switch (destinoIngresado) {
					case "Mar del plata":
					case "Cataratas":
						estadoViaje=abierto
						break;
				
					default:
						estadoViaje=cerrado
						break;
				}
				break;	

			case "Otoño":
				switch (destinoIngresado) {
					case "Mar del plata":
					case "Cataratas":
					case "Bariloche":
					case "Cordoba":
						estadoViaje=abierto
						break;
				
					default:
						estadoViaje="cerrado"
						break;
				}
			case "Primavera":
				switch (destinoIngresado) {
					case "Bariloche":
						estadoViaje="cerrado"
						break;
				
					default:
						estadoViaje="abierto"
						break;
				}
				break;	
		
		}
		switch (estadoViaje) {
			case "abierto":
				alert("Se viaja")
				break;
			case "cerrado":
				alert("No se viaja")
				break;
		}
	
	console.log(estadoViaje)
}