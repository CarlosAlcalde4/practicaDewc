class Personaje {
  constructor(nombre, x, y, idDiv) {
    this.nombre = nombre
    this.x = x
    this.y = y
    this.div = document.getElementById(idDiv)
    this.div.style.left = this.x + "px"
    this.div.style.top = this.y + "px"
  }

  mover(dx) {
    this.x = this.x + dx
    if (this.x < 0) this.x = 0
    if (this.x > window.innerWidth - 50) this.x = window.innerWidth - 50
    this.div.style.left = this.x + "px"
  }
}

class Mario extends Personaje {
  constructor(x, y) {
    super("Mario", x, y, "mario")
  }
}

class Bowser extends Personaje {
  constructor(x, y) {
    super("Bowser", x, y, "bowser")
  }
}

const mario = new Mario(0, 100)
const bowser = new Bowser(200, 100)

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    mario.mover(-20)
  }
  if (e.key === "ArrowRight") {
    mario.mover(20)
  }
})