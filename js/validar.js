
function validar(formulario){

    if(formulario.nombre.value.length < 5){
        alert("Escriba por lo menos 5 caracteres");
        formulario.nombre.focus();
        return false;
    }

    var checkStr = formulario.nombre.value;

    var checkOK = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    
    var allValid = true;

    for(i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(j = 0; j < checkOK.length; j++)
            if(ch == checkOK.charAt(j))
              break;
        if(j == checkOK.length){
            allValid = false;
            break;
        }
    }   

    if(!allValid){
        alert("Escribe solo letras en el campo nombre");
        formulario.nombre.value;
        return false;
    }
 //edad

 var checkSt = formulario.edad.value; //obtener el valor del edad 

 //definir que es correcto para esta vailidacion

 var checkOK = "1234567890";

 //varieble para devolver si es verdadero o falso el valor 

 var allValid = true;

 for (i = 0; i < checkSt.length; i++) {
     var ch = checkSt.charAt(i);
     for (j = 0; j < checkOK.length; j++)
         if (ch == checkOK.charAt(j))
             break;
     if (j == checkOK.length) {
         allValid = false;
         break;
     }

 }
 if (!allValid) {
     alert("Escriba solo numeros en el campo edad");
     formulario.edad.value;
     return false;
 }

 
    var txt = formulario.email.value;
     
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    alert("Email "+(b.test(txt)?"":"no")+"valido");
    return b.test(txt);
}