let currentIndex = 0;

const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const offset = -index * 50;  
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Inicia el slide automático
setInterval(nextSlide, 20000); // Cambia la imagen cada 20 segundos
