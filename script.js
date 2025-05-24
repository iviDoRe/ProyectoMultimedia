/*Las fuentes para este script ya se han mencionado en el codigo css, en el apartado de las slides*/

let currentIndex = 0;

const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;  
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Actualizar posición si se redimensiona la ventana
window.addEventListener('resize', () => showSlide(currentIndex));

// Slide automático cada 20 segundos
setInterval(nextSlide, 20000);

// Mostrar el slide inicial
showSlide(currentIndex);
