
function fecha () {


    var fechanacimiento = document.formulario.fechan.value;
    var fechanact = document.formulario.fechaactual.value;
    var r1 = parseInt(fechanact);
    var r2 = parseInt(fechanacimiento);
    console.log(fechanacimiento);
    edad = r1 - r2;
    console.log(edad)

    document.formulario.edadac.value=`Edad : ${edad}`;

}
