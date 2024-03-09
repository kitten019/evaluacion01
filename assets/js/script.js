
document.addEventListener("DOMContentLoaded", function() {
    // Evento de teclado para mover el carrusel con las teclas izquierda  y derecha 
    document.addEventListener("keydown", function(event) {
      const carrusel = document.getElementById("carouselExampleControls");
      const carruselInstance = new bootstrap.Carousel(carrusel);
      if (event.key === "ArrowLeft") { 
        carruselInstance.prev();
      } else if (event.key === "ArrowRight") { 
        carruselInstance.next();
      }
    });
  });


//Muestra los tooltips existentes
var tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltips.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
