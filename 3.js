let operacion = "suma";
let a = 10;
let b = 2;

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