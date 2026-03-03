function crearTarea() {
  let titulo = document.getElementById("titulo").value;
  let descripcion = document.getElementById("descripcion").value;
  let fecha = document.getElementById("fecha").value;

  let li = document.createElement("li");

  li.innerHTML = 
    titulo + " - " + descripcion + " - " + fecha +
    " <button onclick='completar(this)'>Completar</button>" +
    " <button onclick='eliminar(this)'>Eliminar</button>";

  let lista = document.getElementById("lista");
  lista.appendChild(li);
}

function eliminar(boton) {
  boton.parentElement.remove();
}

function completar(boton) {
  boton.parentElement.classList.toggle("completada");
}

function eliminarTodas() {
  document.getElementById("lista").innerHTML = "";
}