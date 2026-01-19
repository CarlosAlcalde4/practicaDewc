const hud = document.createElement("div")
hud.setAttribute("id","hud")

const btnEmpezar = document.createElement("button")
btnEmpezar.innerHTML="Empezar"
const btnPausar = document.createElement("button")
btnPausar.innerHTML="Pausa"
const btnEliminar = document.createElement("button")
btnEliminar.innerHTML="Eliminar"

const h1=document.createElement("h1")
h1.className="h1"
h1.innerHTML="ELIMINAR AL MALO"

const p = document.createElement("p")
p.className="p"
p.innerHTML="Tienes 30 segundos para matar a los malos"

document.body.appendChild(h1)
document.body.appendChild(p)

btnEmpezar.addEventListener("click",empezar)
btnEliminar.addEventListener("click",eliminar)

const juego = document.createElement("div")
juego.setAttribute("id","juego")
juego.style.position = "relative"  
document.body.appendChild(juego)

const enemigo1 = document.createElement("div")
enemigo1.setAttribute("id","enemigo1")
enemigo1.style.background="url('maduro.png')"
enemigo1.style.position = "absolute"  
enemigo1.addEventListener("click",enemigo1Eliminar)

const enemigo2 = document.createElement("div")
enemigo2.setAttribute("id","enemigo2")
enemigo2.style.background="url('hdp.png')"
enemigo2.style.position = "absolute"  
enemigo2.addEventListener("click",enemigo2Eliminar)

function empezar() {
    setTimeout(() => {
        let arriba = Math.floor(Math.random() * 200)
        let izquierda = Math.floor(Math.random() * 600)

        enemigo1.style.top = arriba + "px"
        enemigo1.style.left = izquierda + "px"

        juego.appendChild(enemigo1)
    }, 1000)

    setTimeout(() => {
        let arriba1 = Math.floor(Math.random() * 150)
        let izquierda1 = Math.floor(Math.random() * 600)

        enemigo2.style.top = arriba1 + "px"
        enemigo2.style.left = izquierda1 + "px"

        juego.appendChild(enemigo2)
    }, 3000)
}

function enemigo1Eliminar(){
    juego.removeChild(enemigo1)
}
function enemigo2Eliminar(){
    juego.removeChild(enemigo2)
}
function eliminar(){
    juego.removeChild(enemigo1)
    juego.removeChild(enemigo2)
}

document.body.appendChild(hud)
hud.appendChild(btnEmpezar)
hud.appendChild(btnPausar)
hud.appendChild(btnEliminar)


