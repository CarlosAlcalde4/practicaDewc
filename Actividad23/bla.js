const rojo = document.getElementById("rojo")
const amarillo = document.getElementById("amarillo")
const verde = document.getElementById("verde")
const empezar = document.getElementById("empieza")
const parar = document.getElementById("parar")
const reiniciar = document.getElementById("reiniciar")


play.addEventListener("click", iniciar)
pause.addEventListener("click", parar)
reset.addEventListener("click", resetear)



function apagar(){
    rojo.style.background = "#555"
    amarillo.style.background = "#555"
    verde.style.background = "#555"
}