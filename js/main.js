// Función para agregar o quitar la clase "scrolled" al header según el scroll
function updateHeaderClass() {
  const logo = document.getElementById("logo-fa");
  const header = document.getElementById("mainHeader");
  const scrollY = window.scrollY;
  const threshold = 100; // Ajusta este valor según desees la distancia para aplicar la clase
  const whatsapp = document.querySelector(".whatsapp-button");

  if (scrollY > threshold) {
    header.classList.add("nav-scroll");
    logo.src = "./assets/logo-color.png";
    whatsapp.classList.add("show-top");
  } else {
    header.classList.remove("nav-scroll");
    logo.src = "./assets/logo-blanco.png";
    whatsapp.classList.remove("show-top");
  }
}

// Agregar un evento de scroll para llamar a la función
window.addEventListener("scroll", updateHeaderClass);

let videoTour = document.getElementById("videoTour");

// Obtener el modal por su ID

const videoBusiness = document.getElementById("videoTour"); //Modal Video Business
$(".contact__play").click(function () {
  videoBusiness.play();
});
$(".btn-close").click(function () {
  videoBusiness.pause();
});
$("#videoFuerteAventura").click(function () {
  if ($(this).hasClass("show")) {
    videoBusiness.pause();
  }
});
