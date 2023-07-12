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

const intervalo = 3000;

setInterval(autoSlide, intervalo);

showSlide();

function togglescrollmain() {
  const bodyElement = document.querySelector("body");
  if (bodyElement.style.overflow === "hidden") {
    bodyElement.style.overflow = "auto";
  } else {
    bodyElement.style.overflow = "hidden";
  }
}
