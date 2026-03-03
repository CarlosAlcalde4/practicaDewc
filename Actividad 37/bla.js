class Personaje{
    constructor(nombre,vida,vidaMax,ataques){
        this.nombre = nombre;
        this.vida = vida;
        this.vidaMax = vidaMax;
        this.ataques = ataques;
    }

    atacar(objetivo, ataque) {
        let daño = ataque.daño;

        objetivo.vida = objetivo.vida - daño;

        if (objetivo.vida < 0) {
            objetivo.vida = 0;
        }

    }
}

class PokemonBueno extends Personaje{
    constructor(nombre,vida,vidaMax,ataques){
        super(nombre,vida,vidaMax,ataques);
        this.tipo = "Bueno";
    }
}

class PokemonMalo extends Personaje{
    constructor(nombre, vida,vidaMax,ataques) {
        super(nombre, vida,vidaMax,ataques);
        this.tipo = "Malo";
    }
}

const buenos = [
    new PokemonBueno("Pikachu",120,120,[
        {nombre: "Rayo", daño: 40},
        {nombre: "Impactreuno", daño: 30}
    ]),
    new PokemonBueno("Arcanine",185,185,[
        {nombre: "Rueda Fuego", daño: 55},
        {nombre: "Mordisco", daño: 30}
    ]),
    new PokemonBueno("Lucario",220,220,[
        {nombre: "Bola Sombra", daño: 60},
        {nombre: "Puño Bala", daño: 20}
    ])
]

const malos = [
    new PokemonMalo("Meowth",150,150,[
        {nombre: "Arañazo", daño: 30},
        {nombre: "Golpes Furia", daño: 40}
    ]),
    new PokemonMalo("Weezing",180,180,[
        {nombre: "Residuos", daño: 60},
        {nombre: "Placaje", daño: 40}
    ]),
    new PokemonMalo("Arbok",200,200,[
        {nombre: "Mordisco", daño: 40},
        {nombre: "Picotazo Veneno", daño: 15}
    ])
]

let PokemonBuenoActual = buenos[Math.floor(Math.random()*buenos.length)]
let PokemonMaloActual = malos[Math.floor(Math.random()*malos.length)]
let turnos = true

const juegoDiv = document.getElementById("juego")
const logDiv = document.getElementById("log")

function game(){
    juegoDiv.innerHTML= `
        <div class="container">
        <div class="card">
            <h2>${PokemonBuenoActual.nombre}</h2>
            <p>Vida: ${PokemonBuenoActual.vida} / ${PokemonBuenoActual.vidaMax}</p>
            <div id="ataques"></div>
        </div>
        <div class="card">
            <h2>${PokemonMaloActual.nombre}</h2>
            <p>Vida: ${PokemonMaloActual.vida} / ${PokemonMaloActual.vidaMax}</p>
        </div>
        </div>
  `;

  if(turnos && PokemonBuenoActual.vida>0 && PokemonMaloActual.vida>0){
    const ataquesDiv = document.getElementById("ataques")

    PokemonBuenoActual.ataques.forEach(ataque => {
        const boton = document.createElement("button")
        boton.textContent = ataque.nombre+ "("+ataque.daño+")"
        boton.addEventListener("click", () => {
            realizarTurnoPokemonBueno(ataque)
        })
        ataquesDiv.appendChild(boton)
    })
  }
}
  function realizarTurnoPokemonBueno(ataque){
        PokemonBuenoActual.atacar(PokemonMaloActual, ataque)
        logDiv.textContent = ` ${PokemonBuenoActual.nombre} usa ${ataque.nombre}`
        turnos = false

        game();

        if(PokemonMaloActual.vida <=0){
            logDiv.textContent += " Pokemon Malo Derrotado "
            game()
            return
        }
        setTimeout(turnoPokemonMalo, 1000)
    }
    function turnoPokemonMalo(){
        const ataque = PokemonMaloActual.ataques[Math.floor(Math.random() * PokemonMaloActual.ataques.length)]

        PokemonMaloActual.atacar(PokemonBuenoActual, ataque)
        logDiv.textContent = ` ${PokemonMaloActual.nombre} usa ${ataque.nombre}`;
        turnos = true

        if(PokemonBuenoActual.vida <= 0){
            logDiv.textContent = " Pokemon Bueno derrotado "
        }
        game()
    }
    game()
  
