
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
   
    if(teclado == 8 ) return true;
  
    var patron = /[0-9\d.]/;
    
    var tec = String.fromCharCode(teclado);

    return patron.test(tec);
}

function interes(){
    var valor = document.formulario.cantidad.value;

    var cantidad = parseInt(valor);

    var interes = cantidad*0.02;

    var total = cantidad+interes;

    document.formulario.sueldoti.value="$ "+total;

}

