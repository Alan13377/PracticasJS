

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
   
    if(teclado == 8 ) return true;
  
    var patron = /[0-9\d.]/;
    
    var tec = String.fromCharCode(teclado);

    return patron.test(tec);
}

function descuento(){
    var valor = document.formulario.cantidad.value;

    var cantidad = parseInt(valor);

    var descuento = cantidad*0.15;

    var total = cantidad-descuento;

    document.formulario.descuento1.value="$ "+total;

}
