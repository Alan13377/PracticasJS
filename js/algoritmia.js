
function problema1(){

    //Obtener el valor del input
    var p1_input = document.querySelector('#p1-input').value;

    //dividir el input por espacions, meterlo en un array e invertir eñ array

    var p1_array = p1_input.split(' ').reverse(); //split reconoce lo que quieras en este caso un espacio y reverse lo invierte

    //construir la string final a partir del array invertido

    var p1_res = ' ';

    //vamos a crear una funcion anonima queme retorne un resultado

    p1_array.forEach(function (palabra, i){
        // si es el principio o final de la palabra no se agrega espacio
        if(1!=0 || 1!=p1_array.length) p1_res += ' '; //agrega espacios al final de la palabra
        p1_res += palabra;
    });
    
    //imprimir el valor final en el output
    document.querySelector('#p1_output').textContent = p1_res;
}

//problema 2

function problema2(){
    /*
    para encontrar el minimo producto escalar entre 2 vectores tenemos que realizar
    las operaciones correspondientes.
    Con el maximo valor de un vector por el minimo vector del otro valor,
    con eso se encuentra el producto escalar
    */

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    var v1 = [p2_x1,p2_x2,p2_x3,p2_x3,p2_x4];
    var v2 = [p2_y1,p2_y2,p2_y3,p2_y4,p2_y5];
    
    v1 = v1.sort(function(a,b){
        return b -a;
    });

    v2 = v2.sort(function(a,b){
        return b-a;
    });

    var p2_producto = 0;

    for (var i = 0; i< v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }
    document.querySelector('#p2_output').textContent = "El producto escalar es .." + p2_producto;
}