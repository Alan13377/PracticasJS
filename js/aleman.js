const monto = document.getElementById("monto");
const tiempo = document.getElementById("tiempo");

const interes = document.getElementById("interes");

const btnCalcular = document.getElementById("calcular");
const alerta = document.getElementById("alert-error");

const llenarTabla = document.querySelector("#lista-tabla tbody");

// vamos a crear una callback una funcion que manda a llamar a otra-

btnCalcular.addListener('click',() =>{
    if(monto.value ===''  || tiempo.value === '' || interes.value === '' ){
        alerta.hidden = false;
        setTimeout(() => {
            alerta.hidden = true;
        },2000);
    } else{
        calcularCronograma(monto.value, tiempo.value, interes.value);
    }// === que sea del mismo tipo  valor y que sea verdadero 
});

function calcularCronograma(monto, tiempo, interes){
    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let mesActual = daysjs().add(1, 'month');
    let amortizacionConstante, pagoInteres, cuota;
    amortizacionConstante = monto/tiempo;

    for(let i=0; i<= tiempo; i++){
        pagoInteres = monto * (interes/100);
        cuota = amortizacionConstante + pagoInteres;
        monto = monto - amortizacionConstante;

        let fecha = mesActual.format('DD-MM,YYYY');
        mesActual = mesActual.add(1, 'month');

        const row = document.createElement('tr');// tofixed redondear a 2 decimales
        row.innerHTML = `
            <td>${fecha}</td>
            <td>${amortizacionConstante.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;

        LlenarTabla.appendChild(row);
    }
}