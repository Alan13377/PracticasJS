
function validarn(e){

    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;
    
    var patron = /[0-9\d.]/;

    var tec = String.fromCharCode(teclado);

     return patron.test(tec);
}

function promedio(){
    var num1 = document.formulario.num1.value;
    var num2 = document.formulario.num2.value;
    var num3 = document.formulario.num3.value;

    var prom1 = parseInt(num1);
    var prom2 = parseInt(num2);
    var prom3 = parseInt(num3);
    
    total = (prom1+prom2+prom3)/3;
    promedioparcial = total * .55;

    var valore = document.formulario.examen.value;
    var calex = parseInt(valore);
    console.log(valore);
    
    totalex = calex * .3;

 
    var valorp = document.formulario.proyecto.value;
    var calp = parseInt(valorp);

    totalpro = calp * .15; 

    promediofinal = (promedioparcial+totalex+totalpro);
    document.formulario.promedio1.value=""+promediofinal;

    
}

