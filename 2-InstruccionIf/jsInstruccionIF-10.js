function mostrar()
{
	let nota;

	nota=Math.random()*(11-1)+1;
	nota=parseInt(nota);

	if (nota > 8) {
		alert("EXCELENTE");
	}
	else if (nota > 3 && nota <= 8) {
		alert("APROBÓ")
	}
	else{
		alert("Vamos, la proxima se puede")
	}
	console.log(nota);
}