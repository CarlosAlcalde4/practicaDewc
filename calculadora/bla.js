function calcular() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacion = document.getElementById("operaciones").value;
    let miDiv = document.getElementById("miDiv");
    let resultado = 0;
    const rojo=Math.floor(Math.random()*256);
    const verde=Math.floor(Math.random()*256);
    const azul=Math.floor(Math.random()*256);


    if (operacion === "suma") {
        resultado = numero1 + numero2;
        miDiv.style.color = "lightgreen";
    } else if (operacion === "resta") {
        resultado = numero1 - numero2;
        miDiv.style.color = "lightcoral";
    } else if (operacion === "multiplicacion") {
        resultado = numero1 * numero2;
        miDiv.style.color = "lightblue";
    } else if (operacion === "division") {
        if (numero2 === 0) {
            alert("Error: División por cero no es permitida.");
            return;
        }
        resultado = numero1 / numero2;
        miDiv.style.color = "lightyellow";
    }
    console.log(resultado);
    if (resultado % 2 === 0) {
        document.body.style.backgroundColor=`rgb(${rojo},${verde},${azul})`;
    } else {
        document.body.style.backgroundColor = "green";
    }

    document.getElementById("resultado").value = resultado;

    
    miDiv.innerHTML += `<p>${numero1} ${operacion} ${numero2} = ${resultado}</p>`;
}

function limpiar() {
    document.getElementById("miDiv").innerHTML = "";
}
