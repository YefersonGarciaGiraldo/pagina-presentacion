//** Calcula experiencia desde una fecha fija **// 
const experiencia = document.getElementById("experiencia");
const fechaInicio = new Date("2024-10-20"); //AA-MM-DD
const hoy = new Date();
const diferencia = hoy.getFullYear() - fechaInicio.getFullYear();
const meses = (hoy.getFullYear() - fechaInicio.getFullYear()) * 12 + hoy.getMonth() - fechaInicio.getMonth();

if (experiencia) {
  experiencia.innerHTML = `<span class="color-acento">+${meses} meses</span> de experiencia`;
}

//** boton tema claro/oscuro **//
const botonTema = document.createElement("button");
botonTema.classList.add("boton-tema");
document.body.appendChild(botonTema);

// actualiza el fondo del icono segun la preferencia 
function actualizarIcono() {
  if (document.body.classList.contains("modo-oscuro")) {
    botonTema.style.backgroundImage = "url('iconos/modo-claro.ico')";
  } else {
    botonTema.style.backgroundImage = "url('iconos/modo-oscuro.ico')";
  }
}

// Cargar preferencia guardada
if (localStorage.getItem("tema") === "oscuro") {
  document.body.classList.add("modo-oscuro");
}
actualizarIcono();

//click para cambiar tema
botonTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
  const modo = document.body.classList.contains("modo-oscuro") ? "oscuro" : "claro";
  localStorage.setItem("tema", modo);
  actualizarIcono();
});

//** Botón para volver arriba **//
const volverArriba = document.createElement("button");
volverArriba.classList.add("boton-volver-arriba")
document.body.appendChild(volverArriba);

volverArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  volverArriba.style.display = window.scrollY > 200 ? "block" : "none";
});