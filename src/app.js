import "./style.css";

function obtenerCartaAleatoria() {
  const palos = ["pica", "trebol", "corazon", "diamante"];
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jota",
    "Reina",
    "Rey",
    "As"
  ];

  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  return { palo: paloAleatorio, valor: valorAleatorio };
}

function mostrarCarta() {
  const cartaElemento = document.getElementById("carta");
  const { palo, valor } = obtenerCartaAleatoria();

  const simbolosPalos = {
    pica: "♠",
    trebol: "♣",
    corazon: "♥",
    diamante: "♦"
  };

  cartaElemento.className = `carta ${palo}`;
  cartaElemento.innerHTML = `<div class="esquina superior">${simbolosPalos[palo]}</div>
    <div class="valor">${valor}</div>
    <div class="esquina inferior">${simbolosPalos[palo]}</div>`;
}

//Boton
document
  .getElementById("cambiar-carta")
  .addEventListener("click", mostrarCarta);

window.onload = mostrarCarta;
