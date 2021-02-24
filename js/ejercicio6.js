function validarventas(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var tec = String.fromCharCode(teclado);

    return patron.test(tec);
    
}


function comision(){

    var ven1 = document.formulario.venta1.value;
    var ven2 = document.formulario.venta2.value;
    var ven3 = document.formulario.venta3.value;
    var su =document.formulario.sueldo.value;

    var vent1 = parseInt(ven1);
    var vent2 = parseInt(ven2);
    var vent3 = parseInt(ven3);
    var sueld = parseInt(su)


    com = (vent1 + vent2 + vent3) * .10;
    sueldototal = com +sueld
    console.log(com);
    document.formulario.sueldoc.value = "$"+sueldototal;

}