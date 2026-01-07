const folio = document.getElementById("folio")
const borrar = document.getElementById("borrar")
borrar.addEventListener("click", limpiar)
let activo=true
document.getElementById("desac").addEventListener("click", ()=>{
    activo=false})
document.getElementById("activ").addEventListener("click", ()=>{
    activo=true})
document.addEventListener("keydown", (e)=>{
    if(activo){
        if(e.key=="Enter"){
            folio.innerHTML+="<br>";
        }else{
            folio.innerHTML+=e.key
        }
    }else{
        alert("Teclado desactivados, ADIOSSS")
    }
})

function limpiar(){
    folio.innerHTML=" "
}
