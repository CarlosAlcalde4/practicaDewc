const proverbios = [
  "Más vale tarde que nunca.",
  "El que mucho abarca, poco aprieta.",
  "A caballo regalado no se le mira el diente.",
  "No hay mal que por bien no venga."
];

const button = document.getElementById("fortuneBtn");
const p = document.getElementById("proverbio");

button.addEventListener("click", function() {
  const index = Math.floor(Math.random() * proverbios.length);
  p.textContent = proverbios[index];
});
