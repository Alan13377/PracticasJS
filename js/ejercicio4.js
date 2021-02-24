
function validarnum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var tec = String.fromCharCode(teclado);

    return patron.test(tec);
}

function porcentajes(){
    var numh = document.formulario.hombres.value;
    var numm = document.formulario.mujeres.value;
    
    var cantidadh = parseInt(numh);
    var cantidadm = parseInt(numm);

    Total = cantidadh + cantidadm;

    var porcentajeh = (cantidadh / Total) * 100;
    var porcentajem = (cantidadm / Total) * 100;

    document.formulario.porceho.value="%"+porcentajeh;
    document.formulario.porcemu.value="%"+porcentajem;
}
