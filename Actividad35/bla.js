const jugador = {
  nombre: "Messi",
  goles: 856,
  x: 100,
  y: 100,

  subirGoles(cantidad) {
    this.goles += cantidad;
    document.getElementById("info").innerHTML = "Goles: " + this.goles;
  },
  bajarGoles(cantidad) {
    this.goles -= cantidad;
    if (this.goles < 0) this.goles = 0;
    document.getElementById("info").innerHTML = "Goles: " + this.goles;
  },

  mover(dx, dy) {
    this.x += dx;
    this.y += dy;

    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
    if (this.x > window.innerWidth - 50) this.x = window.innerWidth - 50;
    if (this.y > window.innerHeight - 50) this.y = window.innerHeight - 50;

    this.actualizar();
  },

  actualizar() {
    const messiDiv = document.getElementById("messi");
    messiDiv.style.left = this.x + "px";
    messiDiv.style.top = this.y + "px";
  }
}

jugador.actualizar();

document.addEventListener("keydown", function(e) {
  switch (e.key) {
    case "ArrowUp": jugador.subirGoles(1); break;
    case "ArrowDown": jugador.bajarGoles(1); break;
    case "w": jugador.mover(0, -50); break;
    case "s": jugador.mover(0, 50); break;
    case "a": jugador.mover(-50, 0); break;
    case "d": jugador.mover(50, 0); break;
  }
});