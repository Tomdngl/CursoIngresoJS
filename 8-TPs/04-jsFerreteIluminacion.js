/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
D'Angelo Tomás

 */
function CalcularPrecio () 
{
    let cantidadLamparas;
    let descuento;
    let importeFinal;
    let marcaLampara;
    let valorDescuento;
    let valorIngresoBruto;
    const precioLampara = 35;
    const ingresosBrutos = 10;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcaLampara=document.getElementById('Marca').value;

    switch (cantidadLamparas) {
        case 5:
            switch (marcaLampara) {
                case "ArgentinaLuz":
                    descuento=40;
                    break;
            
                default:
                    descuento=30;
                    break;
        
            }
            break;
        
        case 4:
            switch (marcaLampara) {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=25;
                    break;
            
                default:
                    descuento=20;
                    break;
            }
            break;
        
        case 3:
            switch (marcaLampara) {
                case "ArgentinaLuz":
                    descuento=15;
                    break;
                case "FelipeLamparas":
                    descuento=10;
                    break;
                default:
                    descuento=5;
            }
            break;

        case 2:
        case 1:
                descuento=0;
            break;

        default:
            descuento=50;
            break;
    
    }




    valorDescuento=((cantidadLamparas*precioLampara)*descuento)/100;
    importeFinal=cantidadLamparas*precioLampara-valorDescuento;

    console.log(valorDescuento);
    console.log(descuento);

    if (importeFinal > 120) {
        valorIngresoBruto=importeFinal*ingresosBrutos/100
        importeFinal=importeFinal+valorIngresoBruto;
        document.getElementById('txtIdprecioDescuento').value="IIBB Usted pagó "+importeFinal+" siendo "+valorIngresoBruto+" el impuesto que se pagó";
    }
    else{
        document.getElementById('txtIdprecioDescuento').value="El precio final es "+importeFinal;
    }

 
}
