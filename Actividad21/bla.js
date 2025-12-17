const equis = document.getElementById("parrafoCoordenadasX")
const i = document.getElementById("parrafoCoordenadasY")
const dos = document.getElementById("dos")

document.addEventListener("keydown",cambiar)
document.addEventListener("keyup",cambiar)

document.addEventListener("mousemove", coordenadasY)
document.addEventListener("mousemove",coordenadaX)

function cambiar(e){
    if(e.type=="keydown"){
        switch(e.key){
        case "a":
            a.style.backgroundColor = "red";
        break;
        case "s":
            s.style.backgroundColor = "yellow";
        break;
        case "d":
            d.style.backgroundColor = "red";
        break;
        }
    }
    if(e.type=="keyup"){
        console.log(e)
        switch(e.key){
        case "a":
            a.style.backgroundColor = "white";
        break;
        case "s":
            s.style.backgroundColor = "white";
        break;
        case "d":
            d.style.backgroundColor = "white";
        break;
        }
    }
}

function coordenadasY(e){
    i.innerHTML="Coordenadas Y "+e.clientY;
}
function coordenadaX(e){
    equis.innerHTML="Coordenadas X "+e.clientX;
}