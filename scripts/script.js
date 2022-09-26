let nav = document.getElementById("nav");
let inicio = document.getElementById("boton-inicio");
let menu = document.getElementById("boton-menu");
let contacto = document.getElementById("boton-contacto");
let darkswitch = document.getElementById("flexSwitchCheckDefault");
let rolls = document.getElementById("boton-rolls");
let makis = document.getElementById("boton-maki");
let niguiris = document.getElementById("boton-niguiri");
let combinados = document.getElementById("boton-combinados");

inicio.addEventListener("click", () => {
  console.log("aa");
  window.location.href = "../index.html";
});

menu.addEventListener("click", () => {
  window.location.href = "../menu.html";
});

contacto.addEventListener("click", () => {
  window.location.href = "../contacto.html";
});

const darkizar = () => {
  document.body.classList.toggle("darkmode");
  nav.classList.toggle("darkmode");
  if (window.location.href.includes("detalle.html")) {
    let menudetallado = document
      .getElementById("menu-detallado")
      .querySelectorAll("li");
    menudetallado.forEach((e) => {
      e.classList.toggle("darkmode");
    });
  }

  if (document.body.classList.contains("darkmode")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
};

if (localStorage.getItem("dark-mode") === "true") {
  darkizar();
  document
    .getElementById("flexSwitchCheckDefault")
    .setAttribute("checked", "checked");
} else {
  document.body.classList.remove("darkmode");
  nav.classList.remove("darkmode");
  if (window.location.href.includes("detalle.html")) {
    let menudetallado = document
      .getElementById("menu-detallado")
      .querySelectorAll("li");
    menudetallado.forEach((e) => {
      e.classList.remove("darkmode");
    });
  }
  document.getElementById("flexSwitchCheckDefault").removeAttribute("checked");
}

darkswitch.addEventListener("click", darkizar);

if (window.location.href.includes("menu.html")) {
  rolls.addEventListener("click", () => {
    console.log("loko");
    window.location.href = "../detalle.html";
  });

  makis.addEventListener("click", () => {
    window.location.href = "../detalle.html#maki";
  });

  niguiris.addEventListener("click", () => {
    window.location.href = "../detalle.html#niguiri";
  });

  combinados.addEventListener("click", () => {
    window.location.href = "../detalle.html#combinados";
  });
}
