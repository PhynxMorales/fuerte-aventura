// Función para agregar o quitar la clase "scrolled" al header según el scroll
function updateHeaderClass() {
  const logo = document.getElementById("logo-fa");
  const header = document.getElementById("mainHeader");
  const scrollY = window.scrollY;
  const threshold = 100; // Ajusta este valor según desees la distancia para aplicar la clase

  if (scrollY > threshold) {
    header.classList.add("nav-scroll");
    logo.src = "./assets/logo-color.png";
  } else {
    header.classList.remove("nav-scroll");
    logo.src = "./assets/logo-blanco.png";
  }
}

// Agregar un evento de scroll para llamar a la función
window.addEventListener("scroll", updateHeaderClass);
