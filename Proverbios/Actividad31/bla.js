const boton = document.getElementById("procesarBtn");
const nombreP = document.getElementById("nombre");
const totalP = document.getElementById("total");

boton.addEventListener("click", function() {
  let texto = document.getElementById("texto").value;

  texto = texto.trim();

  let partes = texto.split(";");

  partes = partes.map(function(campo) {
    return campo.trim();
  });

  const nombreCompleto = partes[0] || "No se encontró nombre";

  nombreP.textContent = "Nombre obtenido: " + nombreCompleto;
  totalP.textContent = "Número total de campos encontrados: " + partes.length;
});
