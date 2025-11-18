function calcular() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacion = document.getElementById("operaciones").value;
    let resultado = 0;

    if (operacion === "suma") {
        resultado = numero1 + numero2;
        document.body.style.backgroundColor = "lightgreen";

    } else if (operacion === "resta") {
        resultado = numero1 - numero2;
        document.body.style.backgroundColor = "lightcoral";

    } else if (operacion === "multiplicacion") {
        resultado = numero1 * numero2;
        document.body.style.backgroundColor = "lightblue";

    } else if (operacion === "division") {
        if (numero2 === 0) {
            alert("Error: División por cero no es permitida.");
            return;
        }
        resultado = numero1 / numero2;
        document.body.style.backgroundColor = "lightyellow";
    }

    document.getElementById("resultado").value = resultado;

    let div = document.getElementById("miDiv");
    div.innerHTML += `<p>${numero1} ${operacion} ${numero2} = ${resultado}</p>`;
}

function limpiar() {
    document.getElementById("miDiv").innerHTML = "";
}
