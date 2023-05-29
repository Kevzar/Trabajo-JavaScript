function limpiar() {
    document.getElementById('my-form').reset();
    document.getElementById('totalapagar').innerHTML = 'Total a Pagar: $'
}


function calcular() {
    let nro1 = 0;
    let total = 0;
    let est = 40
    let tra = 100
    let jun = 170


    let operando = '';


    nro1 = document.getElementById('cantidad').value;



    operando = document.getElementById('inlineFormSelectPref').value;



    console.log("El numero 1 es: " + nro1);
    console.log("El operando es: " + operando);


    if(operando == '1') {
        total = parseInt(nro1) * parseInt(est);
    }
    
    if(operando == '2') {
        total = parseInt(nro1) * parseInt(tra);
    }
    
    if(operando == '3') {
        total = parseInt(nro1) * parseInt(jun);
    }


    
    let act = document.getElementById('totalapagar');
    act.innerHTML = 'Total a Pagar: $' + total



    
    console.log("El total es: " + total);
    

}