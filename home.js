let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-item");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

function autoSlide() {
  changeSlide(1);
}

// Defina o intervalo de tempo em milissegundos (por exemplo, 3000 para 3 segundos)
const intervalo = 3000;

// Inicia a passagem automática do carrossel
setInterval(autoSlide, intervalo);

showSlide();
