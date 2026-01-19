let padre = document.getElementById("padre")
let arriba = Math.floor(Math.random()*window.innerHeight)
let izquierda = Math.floor(Math.random()*window.innerWidth)
let arriba1 = Math.floor(Math.random()*window.innerHeight)
let izquierda1 = Math.floor(Math.random()*window.innerWidth)
let arriba2 = Math.floor(Math.random()*window.innerHeight)
let izquierda2 = Math.floor(Math.random()*window.innerWidth)
let arriba3 = Math.floor(Math.random()*window.innerHeight)
let izquierda3 = Math.floor(Math.random()*window.innerWidth)
let arriba4 = Math.floor(Math.random()*window.innerHeight)
let izquierda4 = Math.floor(Math.random()*window.innerWidth)
let sprite = document.createElement("div")
let sprite1 = document.createElement("div")
let sprite2 = document.createElement("div")
let sprite3 = document.createElement("div")
let sprite4 = document.createElement("div")

sprite.style.marginLeft=izquierda+"px"
sprite.style.marginTop=arriba+"px"
sprite.style.background = "url('boneka.png')"
sprite.className="maduro"
padre.appendChild(sprite)

sprite1.style.marginLeft=izquierda1+"px"
sprite1.style.marginTop=arriba1+"px"
sprite1.style.background = "url('chimpanzini.png')"
sprite1.className="maduro1"
padre.appendChild(sprite1)

sprite2.style.marginLeft=izquierda2+"px"
sprite2.style.marginTop=arriba2+"px"
sprite2.style.background = "url('tung.png')"
sprite2.className="maduro1"
padre.appendChild(sprite2)


sprite3.style.marginLeft=izquierda3+"px"
sprite3.style.marginTop=arriba3+"px"
sprite3.style.background = "url('frigo.png')"
sprite3.className="maduro1"
padre.appendChild(sprite3)

sprite4.style.marginLeft=izquierda4+"px"
sprite4.style.marginTop=arriba4+"px"
sprite4.style.background = "url('lirili.png')"
sprite4.className="maduroa4"
padre.appendChild(sprite4)

let button = document.createElement("input")
button.setAttribute("id", "identificador")
button.setAttribute("type", "button")
button.setAttribute("value", "eliminar")
button.addEventListener("click", eliminar)

let button1 = document.createElement("input")
button1.setAttribute("id", "identificador")
button1.setAttribute("type", "button")
button1.setAttribute("value", "crear")
button1.addEventListener("click", crear)

function eliminar(){
    padre.removeChild(sprite)
    padre.removeChild(sprite1)
    padre.removeChild(sprite2)
    padre.removeChild(sprite3)
    padre.removeChild(sprite4)
}

function crear(){
    padre.appendChild(sprite)
    padre.appendChild(sprite1)
    padre.appendChild(sprite2)
    padre.appendChild(sprite3)
    padre.appendChild(sprite4)
    arriba = Math.floor(Math.random()*window.innerHeight)
    izquierda = Math.floor(Math.random()*window.innerWidth)
    arriba1 = Math.floor(Math.random()*window.innerHeight)
    izquierda1 = Math.floor(Math.random()*window.innerWidth)
    arriba2 = Math.floor(Math.random()*window.innerHeight)
    izquierda2 = Math.floor(Math.random()*window.innerWidth)
    arriba3 = Math.floor(Math.random()*window.innerHeight)
    izquierda3 = Math.floor(Math.random()*window.innerWidth)
    arriba4 = Math.floor(Math.random()*window.innerHeight)
    izquierda4 = Math.floor(Math.random()*window.innerWidth)
}
padre.appendChild(button)
padre.appendChild(button1)