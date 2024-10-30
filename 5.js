let opcion = 1;

if (opcion === 1){
    let numero = 3;
    if (numero > 0){
        console.log("es positivo");
    }
    else if (numero < 0){
        console.log("es negativo");
    }
    else{
        console.log("es 0");
    }

} else if (opcion === 2){
    let a = 2;
    let b = 8;
    let operacion = "suma";

    if (operacion === "suma"){
        console.log("suma=:", a + b);
    } else if (operacion === "resta"){
        console.log("resta=:", a - b);
    } else if (operacion === "multiplicación"){
        console.log("multiplicación=:", a * b);
    } else if (operacion === "division"){
        if (b !== 0) {
            console.log("division=:", a / b);
        }
    } else{
        console.log("hubo un error.");
    }

} else if (opcion === 3){
    let dia = 6;

    if (dia === 1){
        console.log("lunes");
    }
    else if (dia === 2){
        console.log("martes");
    }
    else if (dia === 3){
        console.log("miércoles");
    }
    else if (dia === 4){
        console.log("jueves");
    }
    else if (dia === 5){
        console.log("viernes");
    }
    else if (dia === 6){
        console.log("sábado");
    }
    else if (dia === 7){
        console.log("domingo");
    }
    else {
        console.log("ese dia no existe");
    }

} else{
    console.log("No existe esa opción");
}